let filas = parseInt(prompt("Cuantas filas?", "10"));
let columnas = parseInt(prompt("Cuantas columnas?", "10"));
let minas = parseInt(prompt("Cuantas minas?", "10"));

if (isNaN(filas) || isNaN(columnas) || isNaN(minas) || filas <= 0 || columnas <= 0 || minas <= 0 || minas >= filas * columnas) {
    filas = 10;
    columnas = 10;
    minas = 10;
}

let tablero = [];
let terminado = false;
let reveladas = 0;

function iniciar() {
    crearTablero();
    ponerMinas();
    calcularNumeros();
    dibujar();
}

function crearTablero() {
    tablero = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push({ mina: false, num: 0, visto: false, bandera: false });
        }
        tablero.push(fila);
    }
}

function ponerMinas() {
    let puestas = 0;
    while (puestas < minas) {
        let f = Math.floor(Math.random() * filas);
        let c = Math.floor(Math.random() * columnas);
        if (!tablero[f][c].mina) {
            tablero[f][c].mina = true;
            puestas++;
        }
    }
}

function calcularNumeros() {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (!tablero[i][j].mina) {
                let cont = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        let ni = i + x;
                        let nj = j + y;
                        if (ni >= 0 && ni < filas && nj >= 0 && nj < columnas && tablero[ni][nj].mina) {
                            cont++;
                        }
                    }
                }
                tablero[i][j].num = cont;
            }
        }
    }
}

function dibujar() {
    let contenedor = document.getElementById('tablero');
    contenedor.innerHTML = '';
    contenedor.style.gridTemplateColumns = `repeat(${columnas}, var(--cell-size))`;
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let div = document.createElement('div');
            div.classList.add('celda');
            div.dataset.fila = i;
            div.dataset.columna = j;
            div.onclick = clickIzq;
            div.oncontextmenu = clickDer;
            contenedor.appendChild(div);
        }
    }
}

function clickIzq(e) {
    if (terminado) return;
    let f = parseInt(e.target.dataset.fila);
    let c = parseInt(e.target.dataset.columna);
    revelar(f, c);
    comprobar();
}

function clickDer(e) {
    e.preventDefault();
    if (terminado) return;
    let f = parseInt(e.target.dataset.fila);
    let c = parseInt(e.target.dataset.columna);
    marcar(f, c);
}

function revelar(f, c) {
    let celda = tablero[f][c];
    if (celda.visto || celda.bandera) return;

    celda.visto = true;
    reveladas++;
    let elem = document.querySelector(`.celda[data-fila='${f}'][data-columna='${c}']`);
    elem.classList.add('revelado');

    if (celda.mina) {
        elem.classList.add('mina');
        let img = document.createElement('img');
        img.src = 'img/Bomba.png';
        elem.appendChild(img);
        terminar(false);
    } else {
        if (celda.num > 0) {
            let imgs = ['', 'img/Uno.png', 'img/Dos.png', 'img/Tres.png', 'img/Cuatro.png', 'img/cinco.png', 'img/seis.png', 'img/siete.png', 'img/ocho.png'];
            let img = document.createElement('img');
            img.src = imgs[celda.num];
            elem.appendChild(img);
        } else {
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    let ni = f + x;
                    let nj = c + y;
                    if (ni >= 0 && ni < filas && nj >= 0 && nj < columnas) {
                        revelar(ni, nj);
                    }
                }
            }
        }
    }
}

function marcar(f, c) {
    let celda = tablero[f][c];
    if (celda.visto) return;

    celda.bandera = !celda.bandera;
    let elem = document.querySelector(`.celda[data-fila='${f}'][data-columna='${c}']`);
    if (celda.bandera) {
        elem.classList.add('marcado');
        let img = document.createElement('img');
        img.src = 'img/España.png';
        elem.appendChild(img);
    } else {
        elem.classList.remove('marcado');
        elem.innerHTML = '';
    }
}

function comprobar() {
    if (reveladas === filas * columnas - minas) {
        terminar(true);
    }
}

function terminar(gano) {
    terminado = true;
    if (gano) {
        alert("Ganaste");
    } else {
        alert("Perdiste");
    }
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (tablero[i][j].mina) {
                let elem = document.querySelector(`.celda[data-fila='${i}'][data-columna='${j}']`);
                elem.classList.add('mina');
                if (!elem.querySelector('img')) {
                    let img = document.createElement('img');
                    img.src = 'img/Bomba.png';
                    elem.appendChild(img);
                }
            }
        }
    }
}

window.onload = iniciar;
