let datosTablero = {
    columnas: []
};

// DOm ELEMENTOS

const formularioConfig = document.getElementById('formularioConfig');
const formularioConfigTablero = document.getElementById('formularioConfigTablero');
const inputNumColumnas = document.getElementById('numColumnas');
const configColumnas = document.getElementById('configColumnas');
const tableroKanban = document.getElementById('tableroKanban');
const accionesCabecera = document.getElementById('accionesCabecera');

// Inicializando

document.addEventListener('DOMContentLoaded', inicializar);

function inicializar () {
    cargarDesdeAlmacenamiento();
    if (datosTablero.columnas.length > 0) {
        mostrarTablero();
    } else {
        mostrarFormularioConfiguracion();
    }

    // EVENTOS

    inputNumColumnas.addEventListener('input', generarCamposColumnas);
    formularioConfigTablero.addEventListener('submit', manejarEnvioFormulario);

    // iNIciales
    generarCamposColumnas();
}

// almacenamiento
function cargarDesdeAlmacenamiento() {
    const datosGuardados = localStorage.getItem('miKanban');
    if (datosGuardados) {
        datosTablero = JSON.parse(datosGuardados);
    }
}

function guardarEnAlmacenamiento() {
    localStorage.setItem('miKanban', JSON.stringify(datosTablero));
}

// logica del formulario dinamico

function generarCamposColumnas() {
    const num = inputNumColumnas.value;
    configColumnas.innerHTML = '';

    for (let i = 1; i <= num; i++) {
        configColumnas.innerHTML += `
            <div style="margin-bottom: 10px;">
                <h4>Columna ${i}</h4>
                <input type="text" id="nombreCol${i}" placeholder="Nombre" required>
                <input type="number" id="limiteCol${i}" placeholder="Límite" required style="width: 60px;">
            </div>
        `;
    }
}