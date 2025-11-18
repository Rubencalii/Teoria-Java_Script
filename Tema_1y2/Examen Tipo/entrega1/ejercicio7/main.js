/* Ejercicio 7 */

let arrayNumeros = [];

// Pedir 10 números por pantalla
for (let i = 0; i < 10; i++) {
    let num;
    do {
        const numString = prompt(`Introduce el número ${i + 1} de 10 `);
        num = parseInt(numString);
    } while (isNaN(num));
    arrayNumeros.push(num);
}

console.log(arrayNumeros);

// Pedir las posiciones inicial y final y comprobar que son correctas
let inicial = 0, final = 0;
do {
    alert("Los valores inicial y final tienen que estar entre 0 y 9, e inicial tiene que ser menor que final");
    do {
        const inicialString = prompt(`Introduce la posición inicial `);
        inicial = parseInt(inicialString);
    } while (isNaN(inicial));

    do {
        const finalString = prompt(`Introduce la posición final `);
        final = parseInt(finalString);
    } while (isNaN(final));
} while (inicial < 0 || inicial > 9 || final < 0 || final > 9 || inicial >= final);

// Realizamos el desplazamiento del array
// Realizamos el desplazamiento del array: retiramos el elemento en 'inicial' y lo insertamos en 'final'
const arrayFinal = [...arrayNumeros];
const [valor] = arrayFinal.splice(inicial, 1); // elimina y recoge el elemento
arrayFinal.splice(final, 0, valor); // inserta en la posición final

console.log(arrayFinal);