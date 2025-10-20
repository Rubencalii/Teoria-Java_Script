/*
Ejercicio 6 - Elementos únicos entre dos arrays
Este script recibe dos arrays y devuelve un nuevo array con los elementos que solo aparecen una vez en total (ya sea en el primero o en el segundo).
El resultado se muestra por consola.
Sirve para practicar arrays, concatenación, filtrado y comparación de elementos.
*/

// Función que obtiene los elementos únicos entre dos arrays
let obtenerElementosUnicos = function(arr1, arr2) {
    let concatenado = arr1.concat(arr2);

    // Filtramos los elementos que solo aparecen una vez en el array concatenado
    let unicos = concatenado.filter(item => {
        return concatenado.indexOf(item) === concatenado.lastIndexOf(item);
    });

    return unicos;
};

// Ejemplos de uso y demostración por consola
console.log(obtenerElementosUnicos([1, 2, 3, 3], [3, 2, 1, 4, 5])); 
console.log(obtenerElementosUnicos(["Ray", "Jose", "Dani"], ["Dani", "Jose", "Ivan"])); 
console.log(obtenerElementosUnicos([77, "ciao"], [78, 42, "ciao"])); 
console.log(obtenerElementosUnicos([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]));