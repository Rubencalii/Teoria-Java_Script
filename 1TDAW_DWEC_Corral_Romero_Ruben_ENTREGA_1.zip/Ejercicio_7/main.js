/*
Ejercicio 7 - Mover elementos en un array
Este script pide al usuario 10 números y los almacena en un array.
Luego pide dos posiciones (inicial y final), comprueba que sean válidas y mueve el número de la posición inicial a la final, desplazando el resto de elementos.
Muestra el array antes y después del cambio por consola.
Sirve para practicar arrays, manipulación de posiciones, validación y visualización.
*/

// Array para guardar los números introducidos por el usuario
let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Introduce el numero " + (i + 1) + ": "));
    numeros.push(numero);
}

// Mostramos el array inicial y los índices
console.log("Array inicial:");
console.log("Valor: " + numeros.join(" "));
console.log("Índice: 0  1  2  3  4  5  6  7  8  9");

let inicial, final;
do {
    inicial = parseInt(prompt("Introduce la posición inicial entre 0 y 9:"));
    final = parseInt(prompt("Introduce la posición final entre 0 y 9:"));
    
    // Validamos que las posiciones sean correctas
    if (inicial < 0 || inicial > 9 || final < 0 || final > 9) {
        alert("Las posiciones deben estar entre 0 y 9.");
    } else if (inicial >= final) {
        alert("La posición inicial debe ser menor que la final.");
    }
} while (inicial < 0 || inicial > 9 || final < 0 || final > 9 || inicial >= final);

// Guardamos el número a mover y desplazamos el resto
let numeroAMover = numeros[inicial];
if (inicial < final) {
    for (let i = inicial; i < final; i++) {
        numeros[i] = numeros[i + 1];
    }
    numeros[final] = numeroAMover;
}

// Mostramos el array final y los índices
console.log("Array final:");
console.log("Valor: " + numeros.join(" "));
console.log("Índice: 0  1  2  3  4  5  6  7  8  9");