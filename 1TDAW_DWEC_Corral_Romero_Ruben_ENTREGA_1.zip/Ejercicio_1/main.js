/*
Ejercicio 1 - Divisores y suma de cuadrados
Este script pide al usuario un número entero positivo N y realiza tres tareas:
1. Calcula y muestra los divisores de N.
2. Calcula la suma de los cuadrados de esos divisores.
3. Indica si esa suma es un número cuadrado perfecto.
Sirve para practicar validación de datos, bucles, arrays y operaciones matemáticas.
*/

// Función para pedir al usuario un número entero positivo
let pedirNumero = function() {
    let numero;
    do{
        numero = parseInt(prompt("Pon un numero entero positivo: "))

        if (isNaN(numero) || numero <= 0){
            alert("Tienes que ser un numero entero positivo");
        }

    } while(isNaN(numero) || numero <= 0);

    return numero;
};

// Función que devuelve los divisores de un número
let divisores = function(n){
    let divisores = [];

    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            divisores.push(i);
        }
    }
    return divisores;
};

// Función que suma los cuadrados de los divisores
let sumarCuadrados = function(divisores){
    let suma = 0;
    for (let i = 0; i < divisores.length; i++){
        suma += divisores[i] * divisores[i];
    }
    return suma;
};

// Función que comprueba si un número es cuadrado perfecto
let esCuadrado = function(numero){
    let raiz = Math.sqrt(numero);
    return raiz === Math.floor(raiz);
};

// Programa principal
let N = pedirNumero(); // Pedimos el número
console.log("Numero: " + N);

let misDivisores = divisores(N); // Calculamos los divisores
console.log("Divisores: " + misDivisores);

let suma = sumarCuadrados(misDivisores); // Sumamos los cuadrados
console.log("Suma de cuadrados: " + suma);

if (esCuadrado(suma)){
    console.log("La suma es un cuadrado perfecto");
} else {
    console.log("La suma no es un cuadrado perfecto");
}