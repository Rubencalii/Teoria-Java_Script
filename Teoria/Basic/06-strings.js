/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565
*/

// Strings (cadenas de texto)

// Concatenación

let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length) // 13

// Acceso a caracteres

console.log(greeting[0]) // H
console.log(greeting[11]) // !

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Brais")) // 6
console.log(greeting.indexOf("MoureDev")) // -1 (no encontrado)
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Brais")) // true
console.log(greeting.includes("MoureDev")) // false
console.log(greeting.slice(0, 10)) // Sección // Las palabras desde el índice 0 hasta el 9
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo el brais por MoureDev

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)