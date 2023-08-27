const prompt = require("prompt-sync")({ sigint: true });

const sumar = (n1, n2) => n1 + n2;

const restar = (n1, n2) => n1 - n2;

const multiplicar = (n1, n2) => n1 * n2;

const dividir = (n1, n2) => n1 / n2;

const cuadradoDeUnNumero = (n1) => multiplicar(n1, n1);

const promedioDeTresNumeros = (n1, n2, n3) => dividir(sumar(n1 + n2, n3), 3);

const calcularPorcentaje = (nTotal, nPorcentaje) =>
  dividir(multiplicar(nTotal, nPorcentaje), 100);

const generadorDePorcentaje = (nEspecifico, nTotal) =>
  multiplicar(dividir(nEspecifico, nTotal), 100);

console.log("------------Pruebas de las funciones---------");

let resultadoSumar = sumar(10, 2);
console.log("suma = " + resultadoSumar);

let resultadoRestar = restar(10, 2);
console.log("resta = " + resultadoRestar);

let resultadoMultiplicar = multiplicar(10, 2);
console.log("multiplicación = " + resultadoMultiplicar);

let resultadoDividir = dividir(10, 2);
console.log("división = " + resultadoDividir);

let resultadoCuadrado = cuadradoDeUnNumero(10);
console.log("Cuadrado = " + resultadoCuadrado);

let resultadoPromedio = promedioDeTresNumeros(10, 5, 15);
console.log("Promedio = " + resultadoPromedio);

let resultadoPorcentaje = calcularPorcentaje(10, 2);
console.log("Porcentaje = " + resultadoPorcentaje);

let resultadoGenerador = generadorDePorcentaje(10, 2);
console.log("Generador de Porcentaje = " + resultadoGenerador);
