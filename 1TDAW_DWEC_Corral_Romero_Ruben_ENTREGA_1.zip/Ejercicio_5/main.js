/* Ejercicio 5 - Ordenar palabras según si son colores
Este script pide al usuario 8 palabras y las almacena en un array.
Luego ordena el array para que, si alguna palabra coincide con los colores definidos, esas palabras aparezcan primero.
El resultado se muestra por consola.
Sirve para practicar arrays, bucles, condicionales y ordenación personalizada.
*/

// Array de colores de referencia
let colores = ["rojo", "amarillo", "verde", "blanco", "azul", "marrón", "rosa", "negro"];

// Array para guardar las palabras introducidas por el usuario
let palabrasUsuario = [];

for (let i = 0; i < 8; i++) {
    let palabra = prompt("Introduce una palabra (" + (i + 1) + " de 8):");
    palabrasUsuario.push(palabra);
}

// Función para ordenar las palabras: primero los colores, luego el resto
let ordenarPalabras = function(palabras, colores) {
    return palabras.sort((a, b) => {
        let aEsColor = colores.includes(a.toLowerCase());
        let bEsColor = colores.includes(b.toLowerCase());
        
        if (aEsColor && !bEsColor) return -1;
        if (!aEsColor && bEsColor) return 1;
        return 0;
    });
};

let palabrasOrdenadas = ordenarPalabras(palabrasUsuario, colores);

// Mostramos el resultado por consola
console.log("Array resultante: " + palabrasOrdenadas.join(" "));

let pedirNumero = function() {
    let numero;
    do{
        numero = parseInt(prompt("Pon un numero entero positivo mayor que 0: "))

        if (isNaN(numero) || numero <= 0){
            alert("Tienes que meter un numero mayor que 0 y que sea entero");
        }

    } while(isNaN(numero) || numero <= 0);

    return numero;
};