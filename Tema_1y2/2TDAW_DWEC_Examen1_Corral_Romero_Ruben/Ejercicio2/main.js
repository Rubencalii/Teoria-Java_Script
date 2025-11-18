
var heroes1 = [];
var heroes = {
    nombre: "Arthas",
    clase: "Guerrero",
    reino: "Northrend",
    misionesCompletadas: 0
}

// Menu del juego 
console.log("Bienvenido a la Agencia de Aventuras del Reino");
console.log("1. Introducir nuevo heroe(nuevo)");
console.log("2. Mostrar los heroes registrados(listar)");
console.log("3. Buscar un heroe(Buscar)");
console.log("4. Sumar uno si existe el heroe(Mision)");
console.log("5. Mejor");
console.log("6. Salir ");

// Escoger la opcion que el usuario quiera
var entrada = prompt("Introduce la opcion que quieras")
entrada = entrada.toLowerCase();
do{
    switch (entrada) {
        //Introducir nombre del heroe, clase, reino
        case 1:
                /*Aqui lo que quiero es primero pedir el nombre, clase y origen del nuevo heroe y con los nombre que le he puesto nombreHeroe, claseHeroe y  origenHeroe, seria crear un nuevo objeto con dicho nuevo para luego meterlo en la array de heroe1 */
                var nombreHeroe = prompt("Introduce el nombre del heroe:")
                nombreHeroe = nombreHeroe.toLowerCase();

                var claseHeroe = prompt("Introduce el nombre de la clase del heroe: ")
                claseHeroe = claseHeroe.toLowerCase();

                var origenHeroe = prompt("Introduce los origenes del heroe: ")
                origenHeroe = origenHeroe.toLowerCase();

                let nuevoHeroe = {
                    nombreHeroe : " ",
                    claseHeroe: "",
                    origenHeroe: ""
                }

                let heroe1 = [nuevoHeroe];

            break;
        case 2 :
                const mostrarHeroes = (heroes) => {
                heroes.forEach(heroes => {
                    let {nombre, clase, reino, misionesCompletadas} = heroes;
                    console.log(`El heroe se llama: ${nombre} - tiene de clase: ${clase} - viene de los origenes: ${reino} y tiene las misiones: ${misionesCompletadas}.`);
                    });
                }
            
            break ;
        case 3 :
                let heroeEncontrado = prompt("Introduce el nombre del heroe que quieres buscar:")
                let heroeAMostrar;

                heroeAMostrar = heroes.find(
                        heroes => heroes.nombre.toLowerCase() === heroeEncontrado
                    );

                    if(heroeAMostrar){
                        console.log(`El heroe se llama: ${nombre} - tiene de clase: ${clase} - viene de los origenes: ${reino} y tiene las misiones: ${misionesCompletadas}.`);
                    } else{
                        console.log(`No existe ningun heroe`);
                    }
            break ;
        case 4:
                let heroeMision = prompt("Introduce el nombre del heroe que quieres buscar:")
                let heroeAAMostrar;
                
                // Para ver si existe el heroe o no
                heroeAAMostrar = heroes.find(
                        heroes => heroes.nombre.toLowerCase() === heroeMision
                    );

                    if(heroeAAMostrar){
                        //Si existe el heroe lo que queria hacer aqui es sumar un 1 con un ++
                    const existeHeroes = (heroes) => {
                        heroes.misionesCompletadas++;
                    }
                    } else{
                        // No existe ningun heroe por ese nombre
                        console.log(`No existe ningun heroe`);
                    }
            break;
        case 5:
                
            break;

        case 6:                
                    console.log("Has salido del menu.")
            break;
        
            default:
            console.log("Numero no es correcto, intentalo de nuevo.")
            break;
    }
} while(entrada === "salir");