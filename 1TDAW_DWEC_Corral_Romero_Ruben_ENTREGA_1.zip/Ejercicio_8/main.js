/*Un restaurante nos ha encargado una aplicación para colocar a los clientes en sus mesas.
En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa llena).
El funcionamiento es el siguiente:
Cuando llega un cliente se le pregunta cuántos son. Como el programa no está preparado
para colocar a grupos mayores a 4, si un cliente solicita una mesa con más comensales (por
ejemplo, 6), el programa dará el mensaje “Lo siento, no admitimos grupos de 6, haga grupos
de 4 personas como máximo e intente de nuevo” y volverá a preguntar.

Para cada grupo nuevo que llega, se busca siempre la primera mesa libre (con 0 personas).
Si no quedan mesas libres, se busca una donde haya hueco para todo el grupo (por ejemplo,
si el grupo es de dos personas, se podrá colocar en mesas donde haya una o dos personas).
Cada vez que se sientan nuevos clientes se debe mostrar el estado de las mesas. Los grupos
no se pueden romper, aunque haya huecos sueltos suficientes.

A tener en cuenta:
El programa comienza pidiendo el número de mesas que tiene el restaurante.
Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará por pan-
talla como quedan las mesas inicialmente.
El programa seguirá pidiendo comensales hasta que se introduzca un valor negativo.
Ejemplo de ejecución:

    //El usuario ha metido un valor de 10
    Estado de las mesas: 3 2 0 2 4 1 0 2 1 1 
    El usuario pide una mesa para 2.
    Por favor, Siéntese en la mesa 3
    Estado de las mesas: 3 2 2 2 4 1 0 2 1 1
    El usuario pide una mesa para 4
    Por favor, Siéntese en la mesa 7
    Estado de las mesas: 3 2 2 2 4 1 4 2 1 1
    El usuario pide una mesa para 3
    Por favor, Siéntese en la mesa 6
    Estado de las mesas: 3 2 2 2 4 4 4 2 1 1
    El usuario pide una mesa para 4
    Lo siento, no queda sitio en el restaurante.
    Estado de las mesas: 3 2 2 2 4 1 4 2 1 1

*/

// Pedir numero entero positivo
let pedirNumero = function() {
    let numero;
    do{
        numero = parseInt(prompt("Pon un numero entero mayor a 0: "))
    } while(isNaN(numero) || numero <= 0);
    
    return numero;
};

// Función para inicializar las mesas con valores aleatorios entre 0 y 4
let inicializarMesas = function(numeroMesas) {
    let mesas = [];
    for (let i = 0; i < numeroMesas; i++) {
        mesas[i] = Math.floor(Math.random() * 5);
    }
    return mesas;
};

// Función para mostrar el estado actual de las mesas

let mostrarEstadoMesas = function(mesas) {
    console.log("Estado de las mesas: " + mesas.join(" "));
};

// Función para buscar una mesa disponible para un grupo
let buscarMesaDisponible = function(mesas, comensales) {

    for (let i = 0; i < mesas.length; i++) {
        if (mesas[i] === 0) {
            return i;
        }
    }
    
    for (let i = 0; i < mesas.length; i++) {
        if (mesas[i] + comensales <= 4) {
            return i;
        }
    }
    
    return -1;
};

// Función para pedir número de comensales
let pedirComensales = function() {
    let comensales;
    do {
        comensales = parseInt(prompt("Pra cuantos son?"));
        
        if (isNaN(comensales)) {
            continue;
        }
        
        if (comensales < 0) {
            return comensales; 
        }
        
        if (comensales > 4) {
            alert("No admitimos grupos de " + comensales + ", haga grupos de 4 personas como máximo");
            continue;
        }
        
        return comensales;
        
    } while (true);
};

// Función principal del programa
let gestionarRestaurante = function() {

    let numeroMesas = pedirNumero();
    
    let mesas = inicializarMesas(numeroMesas);
    
    mostrarEstadoMesas(mesas);
    
    while (true) {
        let comensales = pedirComensales();
        
        if (comensales < 0) {
            break;
        }
        
        let mesaDisponible = buscarMesaDisponible(mesas, comensales);
        
        if (mesaDisponible !== -1) {

            mesas[mesaDisponible] += comensales;
            console.log("Siéntese en la mesa " + (mesaDisponible + 1));
        } else {
            console.log("No queda sitio en el restaurante.");
        }
        
        mostrarEstadoMesas(mesas);
    }
};

gestionarRestaurante();