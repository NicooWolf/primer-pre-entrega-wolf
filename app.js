function saludar(nombre) {
  nombre = prompt("Ingrese su nombre por favor");
  return alert(
    `Bienvenido a la Parrilla Nueva Adelina ${nombre}! A continuación vera una lista de nuestros platos disponibles, para poder elegir el que desee.`
  );
}
saludar();

function mostrarPlatos() {
  return alert(
    "Platos disponibles: Costillar, Parrillada, Lomo, Milanesa y Choripan."
  );
}

mostrarPlatos();

class Plato {
  constructor(nombre, acompaniamiento, precio) {
    this.nombre = nombre;
    this.acompaniamiento = acompaniamiento;
    this.precio = Number(precio);
  }
}

const platos = [];
platos.push(new Plato("COSTILLAR", "Papas fritas", 2000));
platos.push(new Plato("PARRILLADA", "Achuras", 1800));
platos.push(new Plato("LOMO", "Ensalada", 1500));
platos.push(new Plato("MILANESA", "Pure de papas", 1200));
platos.push(new Plato("CHORIPAN", "Salsa criolla", 700));

function buscarPlato(valor, plato) {
  return valor.find((obj) => obj.nombre === plato.toUpperCase());
}

for (let i = 0; i < 4; i++) {
  let busqueda = buscarPlato(
    platos,
    prompt(
      "Ingresa el nombre del plato que desea. En caso de no desear ningun plato mas, por favor no ingrese nada y unicamente acepte o cancele este mensaje."
    )
  );
  if (busqueda != undefined) {
    alert(
      "El plato elegido es: " +
        busqueda.nombre +
        ". Su acompaniamiento es de " +
        busqueda.acompaniamiento +
        " y su precio es de $" +
        busqueda.precio
    );
  } else {
    alert(
      "Usted no ha elegido ningun plato o en su defecto, el plato que eligió no esta en nuestro menú."
    );
  }
}
