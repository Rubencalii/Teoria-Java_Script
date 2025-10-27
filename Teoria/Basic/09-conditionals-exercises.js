/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Ruben";
if (nombre === "Ruben"){
    console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let nombreUsuario = "admin";
let contraseña = "admin123";

if(nombreUsuario === "admin" && contraseña === "admin123"){
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 0;

if (numero < 0){
    console.log("El numero es negativo");
} else if (numero === 0){
    console.log("El numero es cero");
} else {
    console.log("El numero es positivo");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 16;

if (edad <= 18){
    console.log("No puedes votar, te faltan " + (18 - edad) + " años");
} else {
    console.log("Puedes votar");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edadPersona = 20;
let tipoPersona = (edadPersona >= 18) ? "adulto" : "menor";
console.log(tipoPersona);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Marzo";

if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero"){
    console.log("Invierno");
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo"){
    console.log("Primavera");
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto"){
    console.log("Verano");
} else {
    console.log("Otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
switch(mes){
    case "Enero":
    console.log("31 dias");
    break;
    case "Febrero":
    console.log("28 dias");
    break;
    case "Marzo":
    console.log("31 dias");
    break;
    case "Abril":
    console.log("30 dias");
    break;
    case "Mayo":
    console.log("31 dias");
    break;
    case "Junio":
    console.log("30 dias");
    break;
    case "Julio":
    console.log("31 dias");
    break;
    case "Agosto":
    console.log("31 dias");
    break;
    case "Septiembre":
    console.log("30 dias");
    break;
    case "Octubre":
    console.log("31 dias");
    break;
    case "Noviembre":
    console.log("30 dias");
    break;
    case "Diciembre":
    console.log("31 dias");
    break;

    default: 
    console.log("Mes no valido");
    break;
}
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "es";

switch(idioma){
    case "es":
    console.log("Hola");
    break;
    case "en":
    console.log("Hello");
    break;
    case "fr":
    console.log("Bonjour");
    break;
    default:
    console.log("Idioma no soportado");
    break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch(mes){
    case "Diciembre":
    case "Enero":
    case "Febrero":
    console.log("Invierno");
    break;
    case "Marzo":
    case "Abril":
    case "Mayo":
    console.log("Primavera");
    break;
    case "Junio":
    case "Julio":
    case "Agosto":
    console.log("Verano");
    break;
    default:
    console.log("Otoño");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(mes){
    case "Enero":
    console.log("31 dias");
    break;
    case "Febrero":
    console.log("28 dias");
    break;
    case "Marzo":
    console.log("31 dias");
    break;
    case "Abril":
    console.log("30 dias");
    break;
    case "Mayo":
    console.log("31 dias");
    break;
    case "Junio":
    console.log("30 dias");
    break;
    case "Julio":
    console.log("31 dias");
    break;
    case "Agosto":
    console.log("31 dias");
    break;
    case "Septiembre":
    console.log("30 dias");
    break;
    case "Octubre":
    console.log("31 dias");
    break;
    case "Noviembre":
    console.log("30 dias");
    break;
    case "Diciembre":
    console.log("31 dias");
    break;

    default: 
    console.log("Mes no valido");
    break;

}