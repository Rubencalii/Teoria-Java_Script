/*Programar una versión reducida del Juego de la Vida (Conway) usando únicamente arrays,
bucles y condicionales. El objetivo es manejar una rejilla 2D, aplicar las reglas clásicas y
mostrar el resultado por consola. */

// Crear una rejilla 
let crearRejilla = function(filas, columnas) {
    let rejilla = [];
    for (let i = 0; i < filas; i++) {
        rejilla[i] = [];
        for (let j = 0; j < columnas; j++) {
            rejilla[i][j] = 0; 
        }
    }
    return rejilla;
};

// Mostrar la rejilla 
let mostrarRejilla = function(rejilla) {
    console.log("Estado actual de la rejilla:");
    for (let i = 0; i < rejilla.length; i++) {
        let fila = "";
        for (let j = 0; j < rejilla[i].length; j++) {
            fila += rejilla[i][j] === 1 ? "■ " : "□ ";
        }
        console.log(fila);
    }
    console.log("─".repeat(rejilla[0].length * 2));
};

// Contar vecinos vivos de una célula
let contarVecinos = function(rejilla, fila, columna) {
    let vecinos = 0;
    let filas = rejilla.length;
    let columnas = rejilla[0].length;
    
    // Revisar las 8 posiciones alrededor de la célula
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            // No contar la célula actual
            if (i === 0 && j === 0) continue;
            
            let nuevaFila = fila + i;
            let nuevaColumna = columna + j;
            
            // Verificar que esté dentro de los límites
            if (nuevaFila >= 0 && nuevaFila < filas && 
                nuevaColumna >= 0 && nuevaColumna < columnas) {
                vecinos += rejilla[nuevaFila][nuevaColumna];
            }
        }
    }
    return vecinos;
};

// Aplicar las reglas del Juego de la Vida 
let siguienteGeneracion = function(rejilla) {
    let filas = rejilla.length;
    let columnas = rejilla[0].length;
    let nuevaRejilla = crearRejilla(filas, columnas);
    
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let vecinos = contarVecinos(rejilla, i, j);
            let celula = rejilla[i][j];
            
            // Reglas del Juego de la Vida
            if (celula === 1) { 
                if (vecinos < 2) {
                    nuevaRejilla[i][j] = 0; 
                } else if (vecinos === 2 || vecinos === 3) {
                    nuevaRejilla[i][j] = 1; 
                } else {
                    nuevaRejilla[i][j] = 0; 
                }
            } else { // Célula muerta
                if (vecinos === 3) {
                    nuevaRejilla[i][j] = 1; 
                }
            }
        }
    }
    
    return nuevaRejilla;
};

// Configurar patrón Glider
let configurarGlider = function(rejilla) {
    rejilla[1][2] = 1;
    rejilla[2][3] = 1;
    rejilla[3][1] = 1;
    rejilla[3][2] = 1;
    rejilla[3][3] = 1;
    return rejilla;
};

// Configurar patrón Blinker
let configurarBlinker = function(rejilla) {
    rejilla[2][1] = 1;
    rejilla[2][2] = 1;
    rejilla[2][3] = 1;
    return rejilla;
};

// Función principal
let ejecutarJuegoVida = function() {
    console.log("Juego de la Vida de Conway\n");
    
    // Crear rejilla de 8x8
    let rejilla = crearRejilla(8, 8);
    
    // Configurar patrón inicial
    rejilla = configurarGlider(rejilla);
    
    console.log("Generación 0:");
    mostrarRejilla(rejilla);
    
    // Simular 5 generaciones
    for (let generacion = 1; generacion <= 5; generacion++) {
        rejilla = siguienteGeneracion(rejilla);
        console.log(`Generación ${generacion}:`);
        mostrarRejilla(rejilla);
        console.log("");
    }
    
    console.log("Simulación completada!");
};

// Ejecutar el juego
ejecutarJuegoVida();

// Ejemplo con Blinker
console.log("\n=== EJEMPLO CON PATRÓN BLINKER ===\n");
let rejillaBlinker = crearRejilla(6, 6);
rejillaBlinker = configurarBlinker(rejillaBlinker);

console.log("Blinker - Generación 0:");
mostrarRejilla(rejillaBlinker);

for (let i = 1; i <= 3; i++) {
    rejillaBlinker = siguienteGeneracion(rejillaBlinker);
    console.log(`Blinker - Generación ${i}:`);
    mostrarRejilla(rejillaBlinker);
}