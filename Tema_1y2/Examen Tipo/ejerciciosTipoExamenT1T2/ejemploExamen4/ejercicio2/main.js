let velocidad = parseInt(prompt("Introduce tu velocidad (km/h):"));

if (isNaN(velocidad) || velocidad < 0) {
    alert("Valor de velocidad no válido.");
} else {
    if (velocidad > 120) {
        alert("Estás multado por exceso de velocidad.");
    } else {
        alert("Velocidad dentro del límite permitido.");
    }
}
