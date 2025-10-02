/*Escriba un script que, dados dos arrays cualesquiera, devuelva un nuevo array
con los elementos que solo aparecen una vez en total (ya sea en el primer o en el
segundo array). El orden debe ser: primero los que están en el primer array y luego
los que están en el segundo.
Ejemplos:

    a. [1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
    b. ["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"]
    c. [77, "ciao"] y [78, 42, "ciao"]) ==> [77, 78, 42]
    d. [1, 2, 3, 3] y [3, 2, 1, 4, 5, 4]) ==> [4,5]
*/

let obtenerElementosUnicos = function(arr1, arr2) {
    // Concatenamos los dos arrays
    let concatenado = arr1.concat(arr2);

    // Filtramos los elementos que solo aparecen una vez
    let unicos = concatenado.filter(item => {
        return concatenado.indexOf(item) === concatenado.lastIndexOf(item);
    });

    return unicos;
};

// Ejemplos de uso
console.log(obtenerElementosUnicos([1, 2, 3, 3], [3, 2, 1, 4, 5])); 
console.log(obtenerElementosUnicos(["Ray", "Jose", "Dani"], ["Dani", "Jose", "Ivan"])); 
console.log(obtenerElementosUnicos([77, "ciao"], [78, 42, "ciao"])); 
console.log(obtenerElementosUnicos([1, 2, 3, 3], [3, 2, 1, 4, 5, 4])); 