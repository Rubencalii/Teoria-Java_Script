/*Define un array con los siguientes colores: red, yellow, green, white, blue, brown,
pink y black. A continuación, crea un generador aleatorio de banderas:

    • Se pide el número de franjas que va a tener la bandera (entre 1 y 5). Se
    debe comprobar que el número introducido cumple las características pedidas.
    • El programa obtiene de forma aleatoria 5 colores del array. Para obtener un
    valor aleatorio se puede utilizar la función de Math random, junto con la función floor. Se utilizan de la siguiente manera:
    nombreArray[Math.floor(Math.random() * nombreArray.length)]
    • Usando document.write, crea una tabla de una fila y tantas columnas como colores tenga la bandera generada. Usa el atributo style para rellenar el fondo de
    cada celda del color adecuado.

Variantes:
    a. En el paso 2 se pueden repetir colores en la bandera.
    b. En el paso 2 NO se pueden repetir colores en la bandera.
    c. En el paso 2 se pueden repetir colores mientras no sean consecutivos (es
    decir, no puede haber dos franjas juntas con el mismo color). 
*/

let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];

let numFranjas;
do {
    numFranjas = parseInt(prompt("Introduce el numero de franjas (entre 1 y 5): "));
    if (isNaN(numFranjas) || numFranjas < 1 || numFranjas > 5) {
        alert("El numero introducido no es valido, debe ser entre 1 y 5.");
    }
} while (isNaN(numFranjas) || numFranjas < 1 || numFranjas > 5);

let bandera = [];
for (let i = 0; i < numFranjas; i++) {
    let color;
    do {
        color = colores[Math.floor(Math.random() * colores.length)];
    } while (i > 0 && color === bandera[i - 1]); 
    bandera.push(color);
}

document.write("<table style='width:100%; height:200px; border-collapse: collapse;'><tr>");
for (let i = 0; i < bandera.length; i++) {
    document.write("<td style='background-color:" + bandera[i] + "; width:" + (100 / numFranjas) + "%;'></td>");
}
document.write("</tr></table>");

let pedirNumero = function() {
    let numero;
    do{
        numero = parseInt(prompt("Pon un numero entero positivo: "))
        
        if (isNaN(numero) || numero <= 0){
            alert("Tienes que meter un numero que sea entero");
        }

    } while(isNaN(numero) || numero <= 0);

    return numero;
};