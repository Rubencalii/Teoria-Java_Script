const boton = document.getElementById('agregarElemento');
const lista = document.getElementById('lista');

let contador = 1;
boton.addEventListener('click', function() {
    const nuevoElemento = document.createElement('li');
    
    nuevoElemento.textContent = `Elemento ${contador}`;

    lista.appendChild(nuevoElemento);

    contador++;
});

lista.addEventListener('click', function(event) {

    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('seleccionado');
    }
});

lista.addEventListener('dblclick', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
