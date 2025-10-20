/*Ejercicio 8 - Gestión de mesas en un restaurante
Este script simula la asignación de mesas en un restaurante. Cada mesa puede tener de 0 a 4 comensales.
El usuario indica cuántos comensales son y el programa busca la mejor mesa disponible para el grupo.
Si el grupo es mayor de 4, se muestra un mensaje de error y se vuelve a preguntar.
El estado de las mesas se muestra tras cada asignación.
Sirve para practicar arrays, generación aleatoria, bucles, condicionales y lógica de asignación.
*/

// Función para pedir un número entero positivo
let pedirNumero = function() {
    let numero;
    do{
        numero = parseInt(prompt("¿Cuántas personas tiene el grupo? (máximo 4): "))
        if (isNaN(numero) || numero <= 0 || numero > 4){
            alert("Solo se admiten grupos de 1 a 4 personas.");
        }
    } while(isNaN(numero) || numero <= 0 || numero > 4);
    return numero;
};

// Pedimos el número de mesas y las inicializamos con valores aleatorios entre 0 y 4
let numMesas = parseInt(prompt("¿Cuántas mesas tiene el restaurante?"));
let mesas = [];
for (let i = 0; i < numMesas; i++) {
    mesas[i] = Math.floor(Math.random() * 5);
}
console.log("Estado inicial de las mesas: " + mesas.join(" "));

// Bucle principal para asignar mesas hasta que el usuario introduzca un valor negativo
let comensales;
do {
    comensales = parseInt(prompt("¿Cuántos comensales son? (negativo para salir)"));
    if (comensales < 0) break;
    if (comensales > 4) {
        alert("Lo siento, no admitimos grupos de más de 4. Haga grupos de 4 personas como máximo e intente de nuevo.");
        continue;
    }

    // Buscamos la primera mesa libre (con 0 personas)
    let mesaAsignada = -1;
    for (let i = 0; i < mesas.length; i++) {
        if (mesas[i] === 0) {
            mesaAsignada = i;
            break;
        }
    }
    // Si no hay mesas libres, buscamos una con hueco suficiente
    if (mesaAsignada === -1) {
        for (let i = 0; i < mesas.length; i++) {
            if (mesas[i] + comensales <= 4) {
                mesaAsignada = i;
                break;
            }
        }
    }

    // Asignamos la mesa si es posible
    if (mesaAsignada !== -1) {
        mesas[mesaAsignada] += comensales;
        alert("Por favor, siéntese en la mesa " + (mesaAsignada + 1));
    } else {
        alert("Lo siento, no queda sitio en el restaurante.");
    }
    // Mostramos el estado de las mesas tras cada asignación
    console.log("Estado de las mesas: " + mesas.join(" "));
} while (comensales >= 0);