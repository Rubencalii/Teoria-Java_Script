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

// Envios formulario

function manejarEnvioFormulario(e) {
    e.preventDefault();

    const numColumnas = inputNumColumnas.value;
    datosTablero.columnas = [];

    for (let i = 1; i <= numColumnas; i++) {
        const nombreCol = document.getElementById(`nombreCol${i}`).value;
        const limiteCol = parseInt(document.getElementById(`limiteCol${i}`).value, 10);

        datosTablero.columnas.push({
            nombre: nombreCol,
            limite: limiteCol,
            tareas: []
        });
    }

    guardarEnAlmacenamiento();
    mostrarTablero();
}

// MOnstar tablero 

function mostrarTablero() {
    formularioConfig.style.display = 'none'; 
    tableroKanban.innerHTML = ''; 
    accionesCabecera.innerHTML = '<button onclick="reiniciarTablero()">Reiniciar</button>';

    datosTablero.columnas.forEach((columna, idxCol) => {
        const columnaDiv = document.createElement('div');
        columnaDiv.className = 'columna';
        columnaDiv.innerHTML = `
            <h3>${columna.nombre} (${columna.tareas.length}/${columna.limite})</h3>
            <div class="zona-drop" id="zona-${idxCol}" style="min-height: 50px; border: 1px dashed #ccc;"></div>
            <input type="text" id="input-${idxCol}" placeholder="Tarea...">
            <button onclick="añadirTarea(${idxCol})">+</button>
        `;

        const zonaDrop = columnaDiv.querySelector('.zona-drop');

        // Dibujamos las tareas
        columna.tareas.forEach((tareaTexto, idxTarea) => {
            const divTarea = document.createElement('div');
            divTarea.className = 'tarea';
            divTarea.textContent = tareaTexto;
            divTarea.draggable = true;

            // Evento para empezar a arrastrar
            divTarea.ondragstart = (e) => {
                e.dataTransfer.setData('tarea', idxTarea);
                e.dataTransfer.setData('colOrigen', idxCol);
            };

            // Borrar con doble clic 
            divTarea.ondblclick = () => {
                datosTablero.columnas[idxCol].tareas.splice(idxTarea, 1);
                actualizarTodo();
            };

            zonaDrop.appendChild(divTarea);
        });

        // Configuración de soltar 
        zonaDrop.ondragover = (e) => e.preventDefault();
        zonaDrop.ondrop = (e) => manejarDrop(e, idxCol);

        tableroKanban.appendChild(columnaDiv);
    });
}