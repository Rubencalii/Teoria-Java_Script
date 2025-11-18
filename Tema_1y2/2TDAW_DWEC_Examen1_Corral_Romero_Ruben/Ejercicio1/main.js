// Menu del juego 
console.log("Bienvenido a la Agencia de Aventuras del Reino");
console.log("1. Cifrar un conjuro(cifrar)");
console.log("2. Descifrar un conjuro(descifrar)");
console.log("3. Salir del programa ");

var entrada = prompt("Introduce la opcion que quieras")
entrada = entrada.toLowerCase();

/* Un switch para una de las 3 opciones*/

    switch (entrada) {
        // Cifrado del conjuro
        case 1:
            var cifrarConjuro = prompt("Introduce el conjuro que quieras.")
                //Paso el conjuro todo a mayusculas
                cifrarConjuro = cifrarConjuro.toUpperCase();

                for (let i = 0; i < cifrarConjuro.length; index++) {
                    //Sustituir las palabras por las otras.
                    const cambiarVocales =(cifrarConjuro) =>{
                    for (let i = 0; i < cifrarConjuro.length; index++) {
                        if(cifrarConjuro.charArt(i) === "A"){
                            cifrarConjuro = cifrarConjuroConjuro.replace("^")
                        } else if (cifrarConjuro.charArt(i) === "E"){
                            cifrarConjuro = cifrarConjuro.replace("%")
                        } else if (cifrarConjuro.charArt(i) === "I"){
                            cifrarConjuro = cifrarConjuro.replace("&")
                        } else if (cifrarConjuro.charArt(i) === "O"){
                            cifrarConjuro = cifrarConjuro.replace("#")
                        } else if (cifrarConjuro.charArt(i) === ""){
                            cifrarConjuro = cifrarConjuro.replace("U")
                        }
                    }
                    console.log("El mensaje con las vocales cambiadas:" + cambiarVocales);
                }
                    // Ahora darle la vuelta a las palabras 

                    // Ahora sustituir los espacios por los barra bajas
                    const sustituirEspacio = (cifradoConjuro) =>{
                    descifrarConjuro = descifrarConjuro.replaceAll("_" , " ");
                }    
                }
                
            break;
        // Descifrado del conjuro 
        case 2:
            var descifrarConjuro = prompt("Introduce el el mensaje cifrado: ")

            const descifrarEspacios = (descifrarConjuro) =>{
                descifrarConjuro = descifrarConjuro.replaceAll(" " , "_");
            }

            const darleVuelta = (descifrarConjuro) =>{

            }

            const cambiarVocales =(descifrarConjuro) =>{
                for (let i = 0; i < descifrarConjuro.length; index++) {
                    if(descifrarConjuro.charArt(i) === "^"){
                        descifrarConjuro = descifrarConjuro.replace("A")
                    } else if (descifrarConjuro.charArt(i) === "%"){
                        descifrarConjuro = descifrarConjuro.replace("E")
                    } else if (descifrarConjuro.charArt(i) === "&"){
                        descifrarConjuro = descifrarConjuro.replace("I")
                    } else if (descifrarConjuro.charArt(i) === "#"){
                        descifrarConjuro = descifrarConjuro.replace("O")
                    } else if (descifrarConjuro.charArt(i) === "@"){
                        descifrarConjuro = descifrarConjuro.replace("U")
                    }
                }
                console.log("El mensaje con las vocales cambiadas:" + cambiarVocales);
            }

            break;
        // Salir
        case 3:
            console.log("Has elegido salir del programa");
            break;

        default:
            console.log("Numero no es correcto, intentalo de nuevo.")
        break;
    }