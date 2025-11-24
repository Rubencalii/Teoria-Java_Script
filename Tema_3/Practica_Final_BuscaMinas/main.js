// Tamaño del tablero por un prompt al iniciar el juego
let filas = parseInt(prompt("Ingrese el número de filas del tablero:", "10"));
let columnas = parseInt(prompt("Ingrese el número de columnas del tablero:", "10"));
let minas = parseInt(prompt("Ingrese el número de minas en el tablero:", "10"));

// Validar entradas
if (isNaN(filas) || isNaN(columnas) || isNaN(minas) || filas <= 0 || columnas <= 0 || minas <= 0 || minas >= filas * columnas) {
    alert("Entradas mal hechas, usando tamaño predeterminados que es  10x10 con 10 minas.");
    filas = 10;
    columnas = 10;
    minas = 10;
}

// Variables globales
let tablero = [];
let juegoTerminado = false;
let celdasReveladas = 0;

// Inicializar el juego
function iniciarJuego() {
    crearTablero();
    colocarMinas();
    calcularNumeros();
    renderizarTablero();
}

// Crear el tablero vacío
function crearTablero() {
    tablero = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push({ mina: false, numero: 0, revelado: false, marcado: false });
        }
        tablero.push(fila);
    }
}

// Colocar minas aleatoriamente
function colocarMinas() {
    let minasColocadas = 0;
    while (minasColocadas < minas) {
        let fila = Math.floor(Math.random() * filas);
        let columna = Math.floor(Math.random() * columnas);
        if (!tablero[fila][columna].mina) {
            tablero[fila][columna].mina = true;
            minasColocadas++;
        }
    }
}

// Calcular números en el tablero
function calcularNumeros() {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (!tablero[i][j].mina) {
                let contador = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        let ni = i + x;
                        let nj = j + y;
                        if (ni >= 0 && ni < filas && nj >= 0 && nj < columnas && tablero[ni][nj].mina) {
                            contador++;
                        }
                    }
                }
                tablero[i][j].numero = contador;
            }
        }
    }
}

// Renderizar el tablero en el DOM
function renderizarTablero() {
    const contenedor = document.getElementById('tablero');
    contenedor.innerHTML = '';
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('div');
            celda.classList.add('celda');
            celda.dataset.fila = i;
            celda.dataset.columna = j;
            celda.addEventListener('click', manejarClick);
            celda.addEventListener('contextmenu', manejarClickDerecho);
            contenedor.appendChild(celda);
        }
    }
}

// Manejar el click izquierdo para revelar celda 
function manejarClickIzquierdo(event){
    if (juegoTerminado) return;
    const fila = parseInt(event.target.dataset.fila);
    const columna = parseInt(event.target.dataset.columna);
    revelarCelda(fila, columna);
    verificarVictoria();
}

// Manejar el click derecho para poner bandera
function manejarClickDerecho(event){
    event.preventDefault();
    if (juegoTerminado) return;
    const fila = parseInt(event.target.dataset.fila);
    const columna = parseInt(event.target.dataset.columna);
    marcarCelda(fila, columna);
}

// Revelar celda
function revelarCelda(fila, columna) {
    const celda = tablero[fila][columna];
    if (celda.revelado || celda.marked) return;

    celda.revelado = true;
    celdasReveladas++;
    const elementoCelda = document.querySelector(`.celda[data-fila='${fila}'][data-columna='${columna}']`);
    elementoCelda.classList.add('revelado');

    if (celda.mina) {
        elementoCelda.classList.add('mina');
        finalizarJuego(false);
    } else {
        if (celda.numero > 0) {
            elementoCelda.textContent = celda.numero;
        } else {
            // Revelar celdas adyacentes si el número es 0
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    let ni = fila + x;
                    let nj = columna + y;
                    if (ni >= 0 && ni < filas && nj >= 0 && nj < columnas) {
                        revelarCelda(ni, nj);
                    }
                }
            }
        }
    }
}

// Marcar o desmarcar celda con bandera
function marcarCelda(fila, columna) {
    const celda = tablero[fila][columna];
    if (celda.revelado) return;

    celda.marked = !celda.marked;
    const elementoCelda = document.querySelector(`.celda[data-fila='${fila}'][data-columna='${columna}']`);
    if (celda.marked) {
        elementoCelda.classList.add('marcado');
        elementoCelda.textContent = '🚩';
    } else {
        elementoCelda.classList.remove('marcado');
        elementoCelda.textContent = '';
    }
}

// Verificar si el jugador ha ganado
function verificarVictoria() {
    if (celdasReveladas === filas * columnas - minas) {
        finalizarJuego(true);
    }
}

// Finalizar el juego
function finalizarJuego(ganado) {
    juegoTerminado = true;
    const mensaje = ganado ? "¡Felicidades! Has ganado!" : "¡Has perdido! Juego terminado.";
    alert(mensaje);
    // Revelar todas las minas
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (tablero[i][j].mina) {
                const elementoCelda = document.querySelector(`.celda[data-fila='${i}'][data-columna='${j}']`);
                elementoCelda.classList.add('mina');
            }
        }
    }
}

// Iniciar el juego al cargar la página
window.onload = iniciarJuego;
