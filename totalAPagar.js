const totalAPagar = function (vehiculo, litrosConsumidos) {
  let precioLitro;
  let total;

  if (vehiculo === "coche") {
    precioLitro = 86;
  } else if (vehiculo === "moto") {
    precioLitro = 70;
  } else if (vehiculo === "autobús") {
    precioLitro = 55;
  }

  total = precioLitro * litrosConsumidos;

  litrosConsumidos <= 25 ? (total += 50) : (total += 25);

  return total;
};

let resultadoPrecio = totalAPagar("coche", 30);
console.log(resultadoPrecio);
