//loop

const loopDePares = (numero) => {
  for (let i = 0; i <= 100; i++) {
    console.log(i);

    if (i === 100) {
      i += numero;
      if (i % 2 == 0) {
        console.log(`El número ${i} es par`);
      }
    }
  }
};

// loopDePares(10);

const loopDeImpares = (numero, palabra) => {
  for (let i = 0; i <= 100; i++) {
    console.log(i);

    if (i === 100) {
      i += numero;
      if (i % 2 != 0) {
        console.log(palabra);
      }
    }
  }
};

// loopDeImpares(15, "hola");

//sumatoria

const sumatoria = (numero) => {
  let acumulador = 0;
  for (let i = 0; i <= numero; i++) {
    acumulador += i;
  }
  return acumulador;
};

let resultadoSumatoria = sumatoria(8);
console.log(resultadoSumatoria);

console.log("----------------------");

// Nuevo arreglo

const nuevoArreglo = (numero) => {
  let arreglo = [];

  for (let i = 1; i <= numero; i++) {
    arreglo.push(i);
  }
  return arreglo;
};

let resultadoArreglo = nuevoArreglo(3);
console.log(resultadoArreglo);

console.log("----------------------");

// similar string.split()

const split = (string) => {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
};

let string = "hola";
resultadoSplit = split(string);
console.log(resultadoSplit);

// manejando dos arreglos

const arrayHandler = (array, array2) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Soy ${array[i]} y yo soy ${array2[i]}`);
  }
};

let n = [1, 2, 3, 4];
let m = resultadoSplit;

arrayHandler(n, m);

// Palíndromo

const palindromo = (palabra) => {
  let palabraReves = "";

  for (let i = 0; i < palabra.length; i++) {
    palabraReves = palabra[i] + palabraReves;
  }
  return palabraReves === palabra ? true : false;
};

console.log(palindromo("ana"));
