const jugador = {
  nombre: "Ash",
  pokeballs: 5,
  pokedex: []
};

const salvajes = [
  {nombre: "Caterpie", probCaptura: 80},
  {nombre: "Pidgey", probCaptura: 60},
  {nombre: "Zubat", probCaptura: 50},
  {nombre: "Abra", probCaptura: 30},
  {nombre: "Snorlax", probCaptura: 10}
];

function mostrarPokemonSalvajesAleatorios(salvajes) {
    const indiceUsado = new Set();
    console.log("Pokémon salvajes disponibles para capturar:");

    while (indiceUsado.size < salvajes.length) {
        const indiceAleatorio = Math.floor(Math.random() * salvajes.length);
        if (!indiceUsado.has(indiceAleatorio)) {
            console.log(`- ${salvajes[indiceAleatorio].nombre} (Probabilidad de captura: ${salvajes[indiceAleatorio].probCaptura}%)`);
            indiceUsado.add(indiceAleatorio);
        }
    }
}

let capturarPokemon = prompt("¿Quieres intentar capturar un Pokémon salvaje? (sí/no)").toLowerCase();
    if (capturarPokemon === "si") {
                mostrarPokemonSalvajesAleatorios(salvajes);
                const nombrePokemon = prompt("Introduce el nombre del Pokémon que quieres capturar:");
                const pokemonSeleccionado = salvajes.find(p => p.nombre.toLowerCase() === nombrePokemon.toLowerCase());

                if (pokemonSeleccionado) {
                        // Intentar capturar el Pokémon
                        if (jugador.pokeballs > 0) {
                                jugador.pokeballs--;
                                const exitoCaptura = Math.random() * 100 < pokemonSeleccionado.probCaptura;
                                if (exitoCaptura) {
                                        jugador.pokedex.push(pokemonSeleccionado);
                                        alert(`¡Felicidades! Has capturado a ${pokemonSeleccionado.nombre}.`);
                                } else {
                                        alert(`Lo siento, no has podido capturar a ${pokemonSeleccionado.nombre}.`);
                                }
                        } else {
                                alert("No te quedan Poké Balls.");
                                // si no quedan, terminar
                        }
                } else {
                        alert("Pokémon no encontrado.");
                }
    }

// Nueva versión: flujo en bucle por turnos
function juegoCaptura(jugadorObj, salvajesArr) {
    while (true) {
        if (jugadorObj.pokeballs <= 0) {
            alert('No te quedan Poké Balls. Fin del juego.');
            break;
        }

        // Elegir un pokémon salvaje aleatorio
        const indice = Math.floor(Math.random() * salvajesArr.length);
        const salvaje = salvajesArr[indice];
        const quiere = prompt(`Ha aparecido un ${salvaje.nombre} (probabilidad captura: ${salvaje.probCaptura}%).\n¿Intentar capturar? (si/no) Escribe 'salir' para terminar.`);
        if (quiere === null) {
            alert('Operación cancelada. Fin del juego.');
            break;
        }

        const respuesta = quiere.trim().toLowerCase();
        if (respuesta === 'salir') {
            alert('Has salido del juego.');
            break;
        }

        if (respuesta === 'si') {
            if (jugadorObj.pokeballs <= 0) {
                alert('No te quedan Poké Balls.');
                break;
            }
            jugadorObj.pokeballs--;
            const num = Math.floor(Math.random() * 100) + 1; // 1..100
            if (num <= salvaje.probCaptura) {
                jugadorObj.pokedex.push(salvaje);
                alert(`¡Has capturado a ${salvaje.nombre}!`);
            } else {
                alert(`${salvaje.nombre} se ha escapado.`);
            }
        } else if (respuesta === 'no') {
            // pasa al siguiente turno
            alert('Has decidido no intentar capturar. Siguiente turno.');
        } else {
            alert("Respuesta no reconocida. Debes escribir 'si', 'no' o 'salir'.");
        }

        alert(`Poké Balls restantes: ${jugadorObj.pokeballs}`);
    }

    // Resumen final
    let resumen = `Resumen final:\nPoké Balls restantes: ${jugadorObj.pokeballs}\nPokémon capturados:\n`;
    if (jugadorObj.pokedex.length === 0) {
        resumen += ' - Ninguno\n';
    } else {
        jugadorObj.pokedex.forEach(p => { resumen += ` - ${p.nombre}\n`; });
    }
    console.log(resumen);
    alert(resumen);
}
