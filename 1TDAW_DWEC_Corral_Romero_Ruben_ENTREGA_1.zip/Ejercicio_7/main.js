/*Realiza un script que pida 10 números por teclado y que los almacene en un
array. A continuación, muestra el contenido de ese array junto al índice de cada
número (mira el dibujo).
Seguidamente el script pedirá dos posiciones a las que llamaremos inicial y final.
Debes comprobar que inicial es menor que final y que ambos números están en-
tre 0 y 9. Si no es así, vuelve a pedirlos.
A continuación, coloca el número de la posición inicial en la posición final, despla-
zando el resto de números en el array para que no se pierda ninguno.
Al final se debe mostrar el array resultante.
Por ejemplo, para inicial = 3 y final = 7:* 

    // Array inicial:
    Valor: 20 5 7 4 32 9 2 14 11 6
    Índice:0  1 2 3 4  5 6 7  8 9

    // Array final:
    Valor: 6 20 5 7 32 9 2 4 14 11
    Índice:0  1  2 3 4  5 6 7  8 9
*/
let numeros = [];

// Introduce 10 numeros 
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Introduce el numero " + (i + 1) + ": "));
    numeros.push(numero);
}


console.log("Array inicial:");
console.log("Valor: " + numeros.join(" "));
console.log("Índice: 0  1  2  3  4  5  6  7  8  9");

let inicial, final;
do {
    inicial = parseInt(prompt("Introduce la posición inicial entre 0 y 9:"));
    final = parseInt(prompt("Introduce la posición final entre 0 y 9:"));
    
    if (inicial < 0 || inicial > 9 || final < 0 || final > 9) {
        alert("Las posiciones deben estar entre 0 y 9.");
    } else if (inicial >= final) {
        alert("La posición inicial debe ser menor que la final.");
    }
} while (inicial < 0 || inicial > 9 || final < 0 || final > 9 || inicial >= final);


let elementoAMover = numeros[inicial];


for (let i = inicial; i < final; i++) {
    numeros[i] = numeros[i + 1];
}


numeros[final] = elementoAMover;


console.log("\nArray final:");
console.log("Valor: " + numeros.join(" "));
console.log("Índice: 0  1  2  3  4  5  6  7  8  9");