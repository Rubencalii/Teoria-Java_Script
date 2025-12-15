// Estructura basica 

const habitacion = ["Entrada templo", "Pasillo oscuro", "Camara Tesoro" ];
const descripcion = ["Esta es una entrada antigua y misteriosa, llena de jeroflificos."];
let objetos = ["Antorcha", "Mapa antiguo", "Llave dorada"];
let inventario = [];

/* Posicion del jugador */
let posicion_jugador = 0;
let juego_terminado = false;
const tesoro_buscado = "Tesoro legendario";

/* Funciones obligatorias */

const mostrarInformacion_habitacion = () => {
    const nombre_habitacion = habitacion[posicion_jugador];
    const descripcion_habitacion = descripcion[posicion_jugador];;
    const objeto = objetos[posicion_jugador];

    // MOSTRAR INFORMACION
    console.log("Habitacion actual:");
    console.log(`Estas en: ${nombre_habitacion}`);
    console.log(descripcion_habitacion);

    if (objeto && objeto !== "ninguno") {
        console.log(`\n¡Hay un objeto aqui! Ves: ${objeto}.`);
    } else {
        console.log("No hay objetos aqui");
    
    }
};

const mostrar_Inventario = () => {
    console.log("Tu inventario contiene:");
    if (inventario.length === 0) {
        console.log("Inventario vacio");
    } else {
        inventario.forEach((item) => {
            console.log(` - ${item}`);
        });
    }
};

const recoger_Objeto = () => {
    const objeto = objetos[posicion_jugador];
    if (objeto && objeto !== "ninguno") {
        inventario.push(objeto);
        objetos[posicion_jugador] = "ninguno";
        console.log(`Has recogido el objeto: ${objeto}`);
    } else {
        console.log("No hay objetos aqui");
    }
};

const verificar_Victoria = () => {
  const ultimaHabitacion = habitaciones.length - 1; 
  return (posicionActual === ultimaHabitacion && inventario.includes(TESORO_BUSCADO));
};

const iniciar_Juego = () => {
    console.log("Has entrado en una aventura para recuperar un tesoro perdido");
    mostrarInformacion_habitacion(posicion_Actual);


    while (!juego_terminado) {
        const menu = {
            1: "Moverse a la siguiente habitacion",
            2: "Recoger objeto",
            3: "Retroceder a la habitacion anterior",
            4: "Ver inventario",
            5: "Salir del juego"
        };

        const eleccion = prompt(menu);
        if(eleccion === null || eleccion === '0') {
            juego_terminado = true;
            console.log("Has salido del juego.");
            break;
        }

        switch (eleccion) {
            case 1:
                if (posicionActual < habitaciones.length - 1) {
                    posicionActual++;
                    mostrarInformacion_habitacion(posicionActual);
                } else {
                    console.log("No puedes avanzar mas");
                }
                break;
        
            case 2:
                if(posicionActual > 0) {
                    posicionActual--;
                    mostrarInformacion_habitacion(posicionActual);
                } else {
                    console.log("No puedes retroceder mas");
                }
                break;
            case 3:
                recoger_Objeto(posicionActual);

                break;
            case 4:
                mostrar_Inventario();
                break;
            default:
                console.log("Opcion no valida, intenta de nuevo.");
        }
        if (verificar_Victoria()) {
            console.log("Has encontrado el tesoro legendario y ganado el juego");
            juego_terminado = true;
        }
    }
};

iniciar_Juego();

