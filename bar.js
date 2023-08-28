let edad = 21;

if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else if (edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
  if (edad === 21) {
    console.log("Felicidades por la mayoría de edad.");
  }
}
if (edad % 2 === 1) {
  console.log("Sabías que tu edad es impar?");
}
