/*
Ejercicio 4 - Generador de banderas aleatorias
Este script pide al usuario el número de franjas de una bandera (entre 1 y 5) y genera una bandera con colores aleatorios.
No permite que dos franjas consecutivas tengan el mismo color.
La bandera se muestra como una tabla en la web, cada celda representa una franja de color.
Sirve para practicar arrays, bucles, generación aleatoria y manipulación del DOM.
*/

// Array con los colores disponibles para las franjas de la bandera
let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];

// Pedimos al usuario el número de franjas y validamos que esté entre 1 y 5
let numFranjas;
do {
    numFranjas = parseInt(prompt("Introduce el numero de franjas (entre 1 y 5): "));
    if (isNaN(numFranjas) || numFranjas < 1 || numFranjas > 5) {
        alert("El numero introducido no es valido, debe ser entre 1 y 5.");
    }
} while (isNaN(numFranjas) || numFranjas < 1 || numFranjas > 5);

// Generamos la bandera con colores aleatorios, evitando colores consecutivos repetidos
let bandera = [];
for (let i = 0; i < numFranjas; i++) {
    let color;
    do {
        color = colores[Math.floor(Math.random() * colores.length)];
    } while (i > 0 && color === bandera[i - 1]); // Evita colores consecutivos iguales
    bandera.push(color);
}

// Mostramos la bandera como una tabla en la web, cada celda representa una franja de color
// Utilizamos document.write para crear la tabla y pintar cada celda con el color correspondiente
document.write("<table style='width:100%; height:200px; border-collapse: collapse;'><tr>");
for (let i = 0; i < bandera.length; i++) {
    // Pintamos cada celda con el color de la franja
    document.write("<td style='background-color:" + bandera[i] + "; width:" + (100 / numFranjas) + "%;'></td>");
}
document.write("</tr></table>");

let pedirNumero = function() {
    let numero;
    do{
        numero = parseInt(prompt("Pon un numero entero positivo: "))
        
        if (isNaN(numero) || numero <= 0){
            alert("Tienes que meter un numero que sea entero");
        }

    } while(isNaN(numero) || numero <= 0);

    return numero;
};