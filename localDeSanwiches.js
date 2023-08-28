let si = true;
let no = false;

let crearSandwich = function (
  sandwichBase,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) {
  let precio;
  if (sandwichBase === "pollo") {
    precio = 150;
  } else if (sandwichBase === "carne") {
    precio = 200;
  } else if (sandwichBase === "veggie") {
    precio = 100;
  } else {
    return "no tenemos ese sandwich";
  }

  if (pan === "blanco") {
    precio += 50;
  } else if (pan === "negro") {
    precio += 60;
  } else if (pan === "s/gluten") {
    precio += 75;
  }

  if (queso === true) {
    precio += 20;
  }
  if (tomate === true) {
    precio += 15;
  }
  if (lechuga === true) {
    precio += 10;
  }
  if (cebolla === true) {
    precio += 15;
  }
  if (mayonesa === true) {
    precio += 5;
  }
  if (mostaza === true) {
    precio += 5;
  }

  return precio;
};

let resultadoSandwich = crearSandwich(
  "veggie",
  "blanco",
  si,
  no,
  si,
  si,
  si,
  no
);
console.log(resultadoSandwich);
