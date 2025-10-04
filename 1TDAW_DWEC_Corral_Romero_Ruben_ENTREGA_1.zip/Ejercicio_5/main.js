/* Usando el array de colores del ejercicio anterior, crea un script que solicite 8 palabras
al usuario y las almacene en otro array. Ordena ese array (el del usuario) de forma
que, si aparecen colores del array de colores, estos queden al principio del array y el
resto de palabras al final. Muéstralo por consola.
Ejemplo:

    Array de palabras del usuario:casa blue green orden brown bombilla bici pink
    Array resultante:blue green brown pink casa orden bombilla bici

*/

let colores = ["rojo", "amarillo", "verde", "blanco", "azul", "marrón", "rosa", "negro"];

let palabrasUsuario = [];

for (let i = 0; i < 8; i++) {
    let palabra = prompt("Introduce una palabra (" + (i + 1) + " de 8):");
    palabrasUsuario.push(palabra);
}

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