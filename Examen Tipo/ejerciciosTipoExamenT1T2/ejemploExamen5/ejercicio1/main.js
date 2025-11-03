const usuario = {
  nombre: "Carlos",
  saldo: 100
};

let menu = "Bienvenidos al cajero automatico.\n";
menu += "1. Consultar saldo\n";
menu += "2. Ingresar dinero\n";
menu += "3. Retirar dinero\n";
menu += "4. Salir\n";

let opcion = prompt(menu);

switch (opcion) {
    case '1':
        console.log(`Tu saldo actual es: ${usuario.saldo} euros.`);
        alert(`Tu saldo actual es: ${usuario.saldo} euros.`);
        break;
    case '2':
        let ingresarDinero = parseFloat(prompt("¿Cuánto dinero deseas ingresar?"));
        if (isNaN(ingresarDinero) || ingresarDinero <= 0) {
            alert("Cantidad no válida para ingresar.");
        } else {
            usuario.saldo += ingresarDinero;
            console.log(`Has ingresado ${ingresarDinero} euros, nuevo saldo es: ${usuario.saldo} euros.`);
            alert(`Has ingresado ${ingresarDinero} euros, nuevo saldo es: ${usuario.saldo} euros.`);
        }
        break;
    case '3':
        let retirarDinero = parseFloat(prompt("Cuanto dinero quieres retirar?"));
        if (isNaN(retirarDinero) || retirarDinero <= 0) {
            console.log("Cantidad invalida de dinero para retirar.");
            alert("Cantidad no válida para retirar.");
        } else if (retirarDinero > usuario.saldo) {
            console.log("No tienes suficiente saldo para retirar dinero.");
            alert("No tienes suficiente saldo para retirar esa cantidad.");
        } else {
            usuario.saldo -= retirarDinero;
            console.log(`Has retirado ${retirarDinero} euros, nuevo saldo es: ${usuario.saldo} euros.`);
            alert(`Has retirado ${retirarDinero} euros, nuevo saldo es: ${usuario.saldo} euros.`);
        }
        break;
    case '4':
        console.log("Gracias por usar el cajero automático.");
        alert("Gracias por usar el cajero automático.");
        break;
    default:
        console.log("Opción no válida.");
        alert("Opción no válida.");
}
