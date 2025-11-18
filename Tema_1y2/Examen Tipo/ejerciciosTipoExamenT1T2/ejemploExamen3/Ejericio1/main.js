const misPokemons = [
    { nombre: "Pikachu", vidaActual: 35, vidaMaxima: 100, estado: "debilitado" },
    { nombre: "Bulbasaur", vidaActual: 80, vidaMaxima: 100, estado: "saludable" },
    { nombre: "Squirtle", vidaActual: 10, vidaMaxima: 100, estado: "debilitado" }
];

// Usar un solo objeto jugador en vez de array para simplificar acceso
const jugador = { nombre: "Ruben", dinero: 1000 };

const COSTE_CURAR = 200;

function listarDebilitados(pokemons) {
    const debilitados = pokemons.filter(p => p.estado.toLowerCase() === "debilitado");
    if (debilitados.length === 0) {
        console.log("No hay pokémon debilitados.");
        alert("No hay pokémon debilitados.");
        return [];
    }

    console.log("Pokémon debilitados:");
    debilitados.forEach(p => console.log(`- ${p.nombre} (vida: ${p.vidaActual}/${p.vidaMaxima})`));
    return debilitados;
}

function curarPokemonPorNombre(nombre, pokemons, jugadorObj) {
    if (!nombre) {
        alert("Operación cancelada o nombre vacío.");
        return;
    }

    const nombreBuscado = nombre.trim();
    const pokemon = pokemons.find(p => p.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (!pokemon) {
        alert(`No existe ningún pokémon llamado '${nombreBuscado}'.`);
        return;
    }

    if (pokemon.estado.toLowerCase() !== "debilitado") {
        alert(`${pokemon.nombre} no está debilitado y no necesita curación.`);
        return;
    }

    if (jugadorObj.dinero < COSTE_CURAR) {
        alert(`No tienes suficiente dinero para curar a ${pokemon.nombre}. Necesitas ${COSTE_CURAR}, tienes ${jugadorObj.dinero}.`);
        return;
    }

    // Todo correcto: aplicar curación
    jugadorObj.dinero -= COSTE_CURAR;
    pokemon.vidaActual = pokemon.vidaMaxima;
    pokemon.estado = "saludable";

    const msg = `${pokemon.nombre} ha sido curado. Vida actual: ${pokemon.vidaActual}. Dinero restante: ${jugadorObj.dinero}.`;
    console.log(msg);
    alert(msg);
}

// Función principal que ejecuta el flujo pedido
function abrirCentroDeCuracion() {
    // Bucle principal: repetir hasta que el jugador escriba 'salir', se quede sin dinero o todos estén saludables
    while (true) {
        if (jugador.dinero <= 0) {
            alert("No te queda dinero. Fin del servicio de curación.");
            break;
        }

        const debilitados = listarDebilitados(misPokemons);
        if (debilitados.length === 0) {
            alert("Todos los pokémon están saludables. No hay nada que curar.");
            break;
        }

        const nombres = debilitados.map(p => p.nombre).join(", ");
        const respuesta = prompt(`Pokémon debilitados: ${nombres}\n¿Qué pokémon quieres curar? Escribe el nombre exacto o escribe 'salir' para terminar:`);

        if (respuesta === null || respuesta.trim().toLowerCase() === "salir") {
            alert("Operación finalizada por el jugador.");
            break;
        }

        curarPokemonPorNombre(respuesta, misPokemons, jugador);

        // Condiciones de salida chequeadas en el inicio del siguiente ciclo
    }

    // Al terminar, mostrar resumen final
    mostrarResumenFinal();
}

function todosSaludables(pokemons) {
    return pokemons.every(p => p.estado.toLowerCase() === "saludable");
}

function mostrarResumenFinal() {
    let resumen = `Resumen final:\nDinero restante: ${jugador.dinero}\n\nEstado de los pokémon:\n`;
    misPokemons.forEach(p => {
        resumen += `- ${p.nombre}: vida ${p.vidaActual}/${p.vidaMaxima}, estado: ${p.estado}\n`;
    });
    console.log(resumen);
    alert(resumen);
}

// Exponer la función en entorno global para probar desde navegador/console
window.abrirCentroDeCuracion = abrirCentroDeCuracion;



