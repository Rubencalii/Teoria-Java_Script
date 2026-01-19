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
