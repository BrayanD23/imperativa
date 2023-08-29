let compararSecreto = function (numeroUsuario) {
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;

  let resultado =
    numeroUsuario === numeroSecreto
      ? "Felicidades, acertaste"
      : `Lo sentimos, tu número era ${numeroSecreto}`;

  return resultado;
};

let resultadoSecreto = compararSecreto(1);
console.log(resultadoSecreto);
