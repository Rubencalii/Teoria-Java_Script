/* Crea un script que pida al usuario un numero entero positivo N mayor a 0. Hay 
que controlar que el número introducido sea correcto. Si no es así se volverá a 
pedir. 
A continuación debe realizar lo siguiente: 
a.  Calcular los divisores del número N y mostrarlos. Un número y es divisor 
de otro x si el resultado de efectuar la operación de resto es igual a 0: 
x%y = 0 --> y es divisor de x 
b.  Calcular la suma de los cuadrados de los divisores obtenidos en el paso 
anterior y mostrarla. 
c.  Indicar si esa suma es un cuadrado o no con una frase por pantalla. Se 
dice que un número es un cuadrado si es el resultado de la multiplicación 
de un número por sí mismo */

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

let divisores = function(n){
    let divisores = [];

    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            divisores.push(i);
        }
    }
    return divisores;
};

let sumarCuadrados = function(divisores){
    let suma = 0;
    
    for (let i = 0; i < divisores.length; i++){
        suma += divisores[i] * divisores[i];
    }
    return suma;
};

let esCuadrado = function(numero){
    let raiz = Math.sqrt(numero);
    return raiz === Math.floor(raiz);
};

let N = pedirNumero();
console.log("Numero: " + N);

let misDivisores = divisores(N);
console.log("Divisores: " + misDivisores);

let suma = sumarCuadrados(misDivisores);
console.log("Suma de cuadrados: " + suma);

if (esCuadrado(suma)){
    console.log("La suma es un cuadrado perfecto");
} else {
    console.log("La suma no es un cuadrado perfecto");
}