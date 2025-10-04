/* Crear un programa JavaScript donde se introduzca un número de kilómetros que
corre un Runner al día. Según los kilómetros recorridos a la semana se clasifica
a los Runners en las siguientes categorías usando los siguientes intervalos. Suponemos que un Runner corre los 7 días de la semana los mismos kilómetros al
día.

    INTERVALO CATEGORIA
    0<KILOMETROS<=10 Corredor novato
    10<KILOMETROS<=30 Corredor iniciado
    30<KILOMETROS<=40 Corredor experto
    KILOMETROS>=50 Corredor nivel Élite

Se debe mostrar mediante document.write la categoría del Runner. Si el usuario
escribe un número negativo se debe mostrar un mensaje de error. */

let kmDia = parseFloat(prompt("Introduce el numero de kilometros al dia que haces: "));

if (isNaN(kmDia) || kmDia < 0){
    document.writeln("El numero introducido no es valido");
} else {
    let kmSemana = kmDia * 7;
    let categoria;

    if (kmSemana > 0 && kmSemana <= 10) {
        categoria = "Novato";
    } else if (kmSemana > 10 && kmSemana <= 30) {
        categoria = "Iniciado";
    } else if (kmSemana > 30 && kmSemana <= 40) {
        categoria = "Experto";
    } else {
        categoria = "Élite";
    }

    document.writeln("La categoria del runner es: " + categoria);
}