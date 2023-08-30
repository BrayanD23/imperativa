let mostrarSiguientes = (numero) => {
  for (let i = 1; i <= 10; i++) {
    console.log(++numero);
  }
};

mostrarSiguientes(5);

// imprimir números entre el 5 y 20, saltando de tres en tres
console.log("---------------------");

let imprimirDeTres = () => {
  for (let i = 5; i <= 20; i += 3) {
    console.log(i);
  }
};
imprimirDeTres();

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
console.log("---------------------");

let sumaNumeros = () => {
  let numero = 0;
  for (let i = 0; i <= 100; i++) {
    numero = numero + i;
  }
  return numero;
};

console.log(sumaNumeros());

//Dado un número entero positivo, mostrar su factorial. El factorial de
//Un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

console.log("---------------------");

let calcularFactorial = (numero) => {
  let prueba = 1;

  for (let i = 1; i <= numero; i++) {
    prueba = prueba * i;
  }
  return prueba;
};

console.log(calcularFactorial(10));
