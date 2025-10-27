/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let string1 = "Hola, ";
let string2 = "como estas ?";

console.log(string1 + string2);
// 2. Muestra la longitud de una cadena de texto

console.log(string1.length + string2.length)
// 3. Muestra el primer y último carácter de un string

console.log(string1[0]); // Primer carácter
console.log(string2[ string2.length  - 1 ]); // Último carácter

// 4. Convierte a mayúsculas y minúsculas un string

console.log(string1 .toUpperCase()); //Mayusculas
console.log(string2 .toLowerCase()); //Minusculas

// 5. Crea una cadena de texto en varias líneas

let cadenaTexto = `Esta es una 
cadena de texto en varias lineas`;
console.log(cadenaTexto);

// 6. Interpola el valor de una variable en un string
let nombre = "Rube";
console.log(`Hola, ${nombre}!`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let frase = "Esta frase se remplazara todos los espacios";
console.log(frase.replace(/ /g, "-")); // Usando expresión regular para reemplazar todos los espacios

// 8. Comprueba si una cadena de texto contiene una palabra concreta
const booleano = frase.includes("remplazara"); // true
console.log(booleano);

// 9. Comprueba si dos strings son iguales
const stringA = "Hola Mundo";
const stringB = "Hola Mundo";
console.log(stringA === stringB); // true

// 10. Comprueba si dos strings tienen la misma longitud

console.log(stringA.length === stringB.length); // true