/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
console.log("Ejercicio primero");
// 2. Escribe un comentario en varias líneas
console.log("Ejercicio primero");
console.log("Ejercicio segundo");
console.log("Ejercicio tercero");
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let numero = 42; //number
let texto = "Hola, mundo"; // String
let esBooleano = true; //boolean
let nulo = null; //null
// 4. Imprime por consola el valor de todas las variables
console.log(numero);
console.log_(texto);
console.log(esBooleano);
console.log(nulo);
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof numero);
console.log(typeof texto);
console.log(typeof esBooleano);
console.log(typeof nulo);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

numero = 1000;
texto = "Adios, Mundo";
esBooleano = false;
nulo = null;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
numero = "Ahora soy un String";
texto = 12345;
esBooleano = " Verdadero2";
nulo = true;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constNumero = 7; //Number
const constTexto = "Constante Texto"; //String
const constBooleano = false; //Boolean
const constNulo = null; // Null

// 9. A continuación, modifica los valores de las constantes
const constNumero1 = "Texto"; //Number
const constTexto2 = 12345; //String
const constBooleano3 = " Verdadero2"; //Boolean
const constNulo4 = true; // Null

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// constNumero = 10; // Error: Assignment to constant variable.
// constTexto = "Nuevo Texto"; // Error: Assignment to constant variable.
// constBooleano = true; // Error: Assignment to constant variable.
// constNulo = "No es null"; // Error: Assignment to constant variable.