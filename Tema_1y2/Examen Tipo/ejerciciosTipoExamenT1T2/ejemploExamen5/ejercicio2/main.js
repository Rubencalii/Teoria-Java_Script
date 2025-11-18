const secreto = Math.floor(Math.random() * 10) + 1;

let intento = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

if (isNaN(intento) || intento < 1 || intento > 10) {
    alert("Por favor, introduce un número válido.");
} else if (intento === secreto) {
    alert("¡Felicidades! Has adivinado el número secreto.");
} else {
    alert("Lo siento, ese no es el número secreto.");
}

