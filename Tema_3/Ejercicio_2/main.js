document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos del DOM
    const mainImage = document.getElementById('mainImage');
    const thumbnailsContainer = document.getElementById('thumbnails');

    // Añadimos un único listener al contenedor de las miniaturas
    thumbnailsContainer.addEventListener('click', (event) => {
        // Comprobamos si el elemento clickado es una miniatura (tiene la clase .thumbnail)
        if (event.target.classList.contains('thumbnail')) {
            
            // 1. Actualizamos la imagen principal
            // Cambiamos el 'src' de la imagen principal por el 'src' de la miniatura clickada
            mainImage.src = event.target.src;
            mainImage.alt = event.target.alt;

            // 2. Gestionamos el estilo de la miniatura activa
            
            // Buscamos si ya hay una miniatura activa
            const currentActive = thumbnailsContainer.querySelector('.activa');
            
            // Si existe, le quitamos la clase .activa
            if (currentActive) {
                currentActive.classList.remove('activa');
            }

            // Añadimos la clase .activa a la miniatura que acabamos de clickar
            event.target.classList.add('activa');
        }
    });
});
