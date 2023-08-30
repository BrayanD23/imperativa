const convertirMayusculas = (array) => {
  let arrayMayuscula = [];
  for (let i = 0; i < array.length; i++) {
    arrayMayuscula.push(array[i].toUpperCase());
  }
  return arrayMayuscula;
};

const fusionarArray = (array1, array2) => {
  let array1M = convertirMayusculas(array1);
  let array2M = convertirMayusculas(array2);
  for (let i = 0; i < array2M.length; i++) {
    array1M.push(array2M[i]);
  }
  return array1M;
};

const compararCalificaciones = (calif1, calif2, pCalificadas) => {
  let sonIguales = true;
  for (let i = 0; i < pCalificadas.length; i++) {
    if (calif1[i] !== calif2[i]) {
      sonIguales = false;
    }
  }

  return sonIguales === true
    ? "Las calificaciones son iguales"
    : "Las calificaciones son distintas";
};

let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp ficiton",
  "la vida es bella",
];
let peliculas2 = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let asiaScores = [8, 10, 6, 8, 10, 6, 7, 8, 5];

let peliculasGeneral = fusionarArray(peliculas, peliculas2);
let ultimoElemento = peliculasGeneral.pop();
let resultadoCalificaciones = compararCalificaciones(
  euroScores,
  asiaScores,
  peliculasGeneral
);

console.log("------------------------------");

//Ejercicios Extra
//En este ejercicio deberás crear una función que devuelva un array con sus elementos invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta el orden de sus elementos.

const imprimirInverso = (array) => {
  let arrayInverso = [];
  for (let i = 0; i < array.length; i++) {
    arrayInverso.unshift(array[i]);
  }
  return console.log(arrayInverso);
};

const inversor = (array) => {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.unshift(array[i]);
  }
  return nuevoArray;
};

arrayInvertido = inversor(peliculas);

console.log("------------------------------");

// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de números (3 elementos) y devuelva la suma de todos ellos.

const sumaArray = (array) => {
  let acumulador = 0;
  for (let i = 0; i < array.length; i++) {
    acumulador += array[i];
  }
  return acumulador;
};

let numeros = [3, 3, 5, 6];
let sumArray = [-5, 100, 19];

let resuladoNumeros = sumaArray(sumArray);
console.log(resuladoNumeros);

//En este ejercicio deberás crear una función llamada join() que reciba un arreglo de strings de 4 elementos y simule el comportamiento del método Array.join().

let comoJoin = (array) => {
  let frase = "";
  for (let i = 0; i < array.length; i++) {
    frase += array[i];
  }
  return frase;
};

let hola = ["h", "o", "l", "a"];

let resultadoHola = comoJoin(hola);
console.log(resultadoHola);
