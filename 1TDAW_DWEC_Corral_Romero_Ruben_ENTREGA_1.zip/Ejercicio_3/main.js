/*Ejercicio 3 - Distribución de presupuesto de una obra
Este script pide al usuario el presupuesto total de una obra y lo reparte en tres conceptos: materiales, mano de obra y licencias.
Si el usuario introduce un valor negativo, muestra un mensaje de error en pantalla.
Sirve para practicar operaciones matemáticas, condicionales y salida por pantalla.
*/

let presupuesto = parseFloat(prompt("Introduce el presupuesto de la empresa: "));

if (isNaN(presupuesto) || presupuesto < 0) {
    // Si el valor no es válido, mostramos un mensaje de error
    document.writeln("<h1>El numero introducido no es valido</h1>");
} else {
    // Calculamos el coste de cada concepto
    let materiales = presupuesto * 0.5;
    let manoObra = presupuesto * 0.2;
    let licencias = presupuesto * 0.3;
    
    // Mostramos los costes de cada concepto en una lista ordenada
    document.writeln("<h2>Costes de la obra</h2>");
    document.writeln("<ol>");
    document.writeln("<li>Materiales: " + materiales.toFixed(2) + "€</li>");
    document.writeln("<li>Mano de obra: " + manoObra.toFixed(2) + "€</li>");
    document.writeln("<li>Licencias de obra: " + licencias.toFixed(2) + "€</li>");
    document.writeln("</ol>");
}