const storage_key = 'miListaDeElementos';

// Elementos DOM
const inputItem = document.getElementById('inputItem');
const listaElementos = document.getElementById('listaElementos');
const btnAñadir = document.getElementById('btnAñadir');
const btnMostrar = document.getElementById('btnMostrar');
const btnLimpiar = document.getElementById('btnLimpiar');

    // Lista actual del localStorage
    function obtenerListaGuardada() {
        const listaGuardada = localStorage.getItem(storage_key);
        return listaGuardada ? JSON.parse(listaGuardada) : [];
    }

    // Guardar array en localStorage
    function guardarLista(arrayLista) {
        localStorage.setItem(storage_key, JSON.stringify(arrayLista));
    }

    // Renderizar lista en el DOM
    function renderizarLista() {
            const lista = obtenerListaGuardada();
            listaElementos.innerHTML = ''; 

            lista.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = item;
                li.title = "Doble click para eliminar";

                li.addEventListener('dblclick', function() {
                    eliminarElemento(index);
                });

                listaElementos.appendChild(li);
            });
        }

    // Eliminar una cosa en especifico
    function eliminarElemento(index) {
        let lista = obtenerListaGuardada();
        lista.splice(index, 1); 
        guardarLista(lista);   
        renderizarLista();     
    }

    // Boton Añadir
    btnAñadir.addEventListener('click', () => {
            const valor = inputItem.value.trim();
            if (valor === '') return alert('Pon algo antes de añadir.');

            const lista = obtenerListaGuardada();
            lista.push(valor);
            guardarLista(lista);
            renderizarLista();
            
            inputItem.value = '';
            inputItem.focus();
            
        });
    
    // Boton Mostrar lista
    btnMostrar.addEventListener('click', renderizarLista);

    // Boton Limpiar lista
    btnLimpiar.addEventListener('click', () => {
        if (confirm('Seguro que quieres borrar toda la lista?')) {
            localStorage.removeItem(storage_key); 
            listaElementos.innerHTML = ''; 
        }
    });