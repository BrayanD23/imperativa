const prompt = require("prompt-sync")({ sigint: true });

let numeroUno = 15;
let numeroDos = 20;

console.log(numeroUno + numeroDos);
let nombre = prompt("ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);

numeroUno = 20;
console.log(numeroUno);
