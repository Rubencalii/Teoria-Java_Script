// Busca Minas - Juego en consola (navegador o Node)
// Implementación modular según la Relación 2

// Interfaz simple que usa prompt/alert en navegador y readline en Node
const isBrowser = (typeof window !== 'undefined' && typeof window.prompt === 'function');

let ask, showAlert;
if (isBrowser) {
	ask = (msg) => Promise.resolve(window.prompt(msg));
	showAlert = (msg) => window.alert(msg);
} else {
	// Node fallback usando readline
	const readline = require('readline');
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	ask = (msg) => new Promise((resolve) => {
		rl.question(msg + ' ', (answer) => resolve(answer));
	});
	showAlert = (msg) => console.log('[ALERT]', msg);
}

// Genera un tablero vacío tamaño x tamaño con valor 'X' (sin descubrir)
function generarTablero(tamano) {
	const tablero = [];
	for (let i = 0; i < tamano; i++) {
		const fila = [];
		for (let j = 0; j < tamano; j++) fila.push('X');
		tablero.push(fila);
	}
	return tablero;
}

// Crea la estructura interna del tablero con minas (*) y 0 para vacías (temporal)
function crearTableroInterno(tamano) {
	const tablero = [];
	for (let i = 0; i < tamano; i++) {
		const fila = [];
		for (let j = 0; j < tamano; j++) fila.push(0);
		tablero.push(fila);
	}
	return tablero;
}

// Coloca 'cantidad' minas aleatoriamente en tableroInterno (modifica tablero)
function colocarMinas(tableroInterno, cantidad) {
	const n = tableroInterno.length;
	let colocadas = 0;
	while (colocadas < cantidad) {
		const i = Math.floor(Math.random() * n);
		const j = Math.floor(Math.random() * n);
		if (tableroInterno[i][j] !== '*') {
			tableroInterno[i][j] = '*';
			colocadas++;
		}
	}
}

// Cuenta minas adyacentes para una celda (en tableroInterno)
function contarMinasAdyacentes(tableroInterno, fila, columna) {
	const n = tableroInterno.length;
	let cont = 0;
	for (let i = fila - 1; i <= fila + 1; i++) {
		for (let j = columna - 1; j <= columna + 1; j++) {
			if (i === fila && j === columna) continue;
			if (i >= 0 && j >= 0 && i < n && j < n) {
				if (tableroInterno[i][j] === '*') cont++;
			}
		}
	}
	return cont;
}

// Calcula los números en tableroInterno (reemplaza 0 por número de minas adyacentes)
function rellenarNumeros(tableroInterno) {
	const n = tableroInterno.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (tableroInterno[i][j] !== '*') {
				tableroInterno[i][j] = contarMinasAdyacentes(tableroInterno, i, j);
			}
		}
	}
}

// Muestra el tablero visible (console.table si está disponible)
function mostrarTablero(tableroVisible) {
	if (console.table) {
		console.table(tableroVisible);
	} else {
		const n = tableroVisible.length;
		for (let i = 0; i < n; i++) {
			console.log(tableroVisible[i].join(' '));
		}
	}
}

// Revela casillas recursivamente: si una casilla es 0, revela adyacentes
function mostrarCasillasAdyacentesVaciasONumericas(tableroInterno, tableroVisible, fila, columna) {
	const n = tableroInterno.length;
	const visited = new Set();
	function dfs(r, c) {
		const key = `${r},${c}`;
		if (visited.has(key)) return;
		visited.add(key);
		if (r < 0 || c < 0 || r >= n || c >= n) return;
		if (tableroVisible[r][c] !== 'X') return; // ya revelada
		const val = tableroInterno[r][c];
		tableroVisible[r][c] = val === 0 ? ' ' : String(val);
		if (val === 0) {
			for (let i = r - 1; i <= r + 1; i++) {
				for (let j = c - 1; j <= c + 1; j++) {
					if (i === r && j === c) continue;
					if (i >= 0 && j >= 0 && i < n && j < n) dfs(i, j);
				}
			}
		}
	}
	dfs(fila, columna);
}

// Revela una casilla según su contenido. Retorna {boom: bool, cambios: number}
function revelarCasilla(tableroInterno, tableroVisible, fila, columna) {
	const n = tableroInterno.length;
	if (fila < 0 || columna < 0 || fila >= n || columna >= n) return { boom: false, cambios: 0 };
	if (tableroVisible[fila][columna] !== 'X') return { boom: false, cambios: 0 };
	const contenido = tableroInterno[fila][columna];
	if (contenido === '*') {
		// mostrar todas las minas
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (tableroInterno[i][j] === '*') tableroVisible[i][j] = '*';
			}
		}
		return { boom: true, cambios: 1 };
	}
	if (contenido === 0) {
		mostrarCasillasAdyacentesVaciasONumericas(tableroInterno, tableroVisible, fila, columna);
		return { boom: false, cambios: 1 };
	}
	tableroVisible[fila][columna] = String(contenido);
	return { boom: false, cambios: 1 };
}

// Cuenta casillas descubiertas (no 'X')
function contarDescubiertas(tableroVisible) {
	let cnt = 0;
	const n = tableroVisible.length;
	for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (tableroVisible[i][j] !== 'X') cnt++;
	return cnt;
}

// Función principal de juego (async para usar ask)
async function jugar() {
	const tamañoStr = await ask('Introduce el tamaño del tablero (ej. 5 para 5x5):');
	const tamaño = parseInt(tamañoStr, 10);
	if (Number.isNaN(tamaño) || tamaño <= 0) {
		showAlert('Tamaño no válido. Saliendo.');
		return;
	}

	// Por defecto colocamos 20% de minas
	const totalCasillas = tamaño * tamaño;
	const numMinas = Math.max(1, Math.floor(totalCasillas * 0.2));

	const tableroInterno = crearTableroInterno(tamaño);
	colocarMinas(tableroInterno, numMinas);
	rellenarNumeros(tableroInterno);

	const tableroVisible = generarTablero(tamaño);

	const partida = {
		tablero: tableroInterno,
		minasRestantes: numMinas,
		movimientos: 0,
	};

	const totalDescubrir = totalCasillas - numMinas;
	let descubiertas = 0;

	showAlert(`Tablero ${tamaño}x${tamaño} con ${numMinas} minas creado. ¡A jugar!`);

	while (true) {
		mostrarTablero(tableroVisible);
		const filaStr = await ask('Introduce la fila (índice desde 0):');
		const colStr = await ask('Introduce la columna (índice desde 0):');
		const fila = parseInt(filaStr, 10);
		const col = parseInt(colStr, 10);
		if (Number.isNaN(fila) || Number.isNaN(col) || fila < 0 || col < 0 || fila >= tamaño || col >= tamaño) {
			showAlert('Coordenadas inválidas. Intenta de nuevo.');
			continue;
		}

		partida.movimientos++;
		const resultado = revelarCasilla(tableroInterno, tableroVisible, fila, col);
		if (resultado.boom) {
			mostrarTablero(tableroVisible);
			showAlert('¡BOOM! Has perdido.');
			console.log('Partida:', JSON.stringify(partida, null, 2));
			break;
		}

		descubiertas = contarDescubiertas(tableroVisible);
		if (descubiertas >= totalDescubrir) {
			mostrarTablero(tableroVisible);
			showAlert('Enhorabuena, has ganado');
			console.log('Partida:', JSON.stringify(partida, null, 2));
			break;
		}
	}

	if (!isBrowser) {
		// cerramos readline si estamos en Node
		try { process.exit(0); } catch (e) {}
	}
}

// Pequeña función de prueba automática (no interactiva) para validar ejecución
function runSelfTest() {
	const tamaño = 4;
	const tableroInterno = crearTableroInterno(tamaño);
	colocarMinas(tableroInterno, 2);
	rellenarNumeros(tableroInterno);
	const tableroVisible = generarTablero(tamaño);
	console.log('Self-test: tablero interno (con números y minas):');
	console.table(tableroInterno);
	console.log('Self-test: tablero visible inicial:');
	console.table(tableroVisible);
	console.log('Self-test OK (sólo comprobación sintáctica y de funciones).');
}

// Si se ejecuta directamente, lanzamos jugar(). Si se pide AUTO_TEST=1, ejecutamos la prueba
if (require && require.main === module) {
	if (process.env.AUTO_TEST === '1') {
		runSelfTest();
	} else {
		// iniciar juego interactivo
		(async () => { await jugar(); })();
	}
}
//Busca Minas

