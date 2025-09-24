/*El presupuesto de una obra se distribuye en los siguientes conceptos:

• 50% de materiales.
• 20% mano de obras.
• 30% en licencias de obra.

Crear un programa JavaScript que pida mediante un prompt el presupuesto total de la
obra y que muestre mediante document.write una lista ordenada del coste de cada
concepto. Si el usuario introduce un presupuesto negativo mostrar un mensaje de error
dentro de un h1.*/

// Introdducimeos el presupuesto 
let presupuesto = parseFloat(prompt("Introduce el presupuesto de la empresa: "));

// Revisamos si el numero es verdadero 
if (isNaN(presupuesto) || presupuesto < 0) {
    document.writeln("<h1>El numero introducido no es valido</h1>");
} else {
    // Calculamos los costes con el porcentaje 
    let materiales = presupuesto * 0.5;
    let manoObra = presupuesto * 0.2;
    let licencias = presupuesto * 0.3;
    
    //Mostrar los resultados
    document .writeln("<h2>Costes de la obra</h2>");
    document.writeln("<ol>");
    document.writeln("<li>Materiales: " + materiales.toFixed(2) + "€</li>");
    document.writeln("<li>Mano de obra: " + manoObra.toFixed(2) + "€</li>");
    document.writeln("<li>Licencias de obra: " + licencias.toFixed(2) + "€</li>");
    document.writeln("</ol>");
    
}