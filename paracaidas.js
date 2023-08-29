let abrirParacaidas = (velocidad, altura) => {
  if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
    return "Abrir paracaidas";
  }

  return "no abrir paracaidas";
};

let resultadoParacaidas = abrirParacaidas(999, 2500);
console.log(resultadoParacaidas);
