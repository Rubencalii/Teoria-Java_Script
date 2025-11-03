const frutas = [
  {nombre: "Manzana", precio: 2},
  {nombre: "Plátano", precio: 1},
  {nombre: "Naranja", precio: 3}
];

const cliente = {
  nombre: "Laura",
  dinero: 5
};

function mostrarFrutasDisponibles(frutas) {
  let mensaje = "Frutas disponibles:";
  frutas.forEach(fruta => {
    mensaje += `\n- ${fruta.nombre}: ${fruta.precio} euros`;
  });
  alert(mensaje);
}

mostrarFrutasDisponibles(frutas);

let comprarFruta = prompt("¿Qué fruta quieres comprar?");

if (comprarFruta) {
  // Buscar fruta por nombre (sin distinguir mayúsculas/minúsculas)
  const seleccionFruta = frutas.find(fruta => fruta.nombre.toLowerCase() === comprarFruta.toLowerCase());

  if (seleccionFruta) {
    if (cliente.dinero >= seleccionFruta.precio) {
      cliente.dinero -= seleccionFruta.precio;
      alert(`Has comprado una ${seleccionFruta.nombre}. Te quedan ${cliente.dinero} euros.`);
      console.log(`Has comprado una ${seleccionFruta.nombre}. Te quedan ${cliente.dinero} euros.`);
    } else {
      alert("No tienes suficiente dinero para comprar esa fruta.");
    }
  } else {
    alert("Esa fruta no está disponible en la tienda.");
  }
} else {
  alert("Compra cancelada.");
}

