const prompt = require("prompt-sync")({ sigint: true });

function converitirMedida(pulgadas) {
  let convertirPulgada = pulgadas * 2.54;
  return convertirPulgada;
}

let pulgadas_centimetros = converitirMedida(5);

console.log(pulgadas_centimetros);

function crearUrl(string) {
  let convertirLink = `http://www.${string}.com`;
  return convertirLink;
}

let hacerLink = crearUrl("perritos");

console.log(hacerLink);

function crearSorpresa(frase) {
  let agregarSigno = `¡${frase}!`;
  return agregarSigno;
}

let agregarAdmiracion = crearSorpresa("hola");

console.log(agregarAdmiracion);

function edadPerros(anho) {
  let calcularEdad = anho * 7;
  return calcularEdad;
}

let edadPerro = edadPerros(8);

console.log(edadPerro);

function valorHora(sueldo) {
  let calcularValor = sueldo / 40;
  return calcularValor;
}

let pagoHora = valorHora(40000);

console.log(pagoHora);

let calcularIMC = function (altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
};
console.log(calcularIMC(1.77, 80));

let convertirMayuscula = function (frase) {
  let cambiarMayus = frase.toUpperCase();
  return cambiarMayus;
};

console.log(convertirMayuscula("hola,cómo estás?"));

let tipodeDato = function (dato) {
  let devolverTipo = typeof dato;
  return devolverTipo;
};

console.log(tipodeDato(51));
console.log(tipodeDato("hola"));
console.log(tipodeDato(true));

let obtenerCircunferencia = function (radio) {
  let calcularCircunferencia = Math.PI * 2 * radio;
  return calcularCircunferencia;
};
console.log(obtenerCircunferencia(5));

const pruebaScope = () => (palabra = "casa");
const resultadoPruebaSocope = pruebaScope();
console.log(resultadoPruebaSocope);
