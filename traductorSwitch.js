let traducir = (palabra) => {
  let traduccion;
  switch (palabra) {
    case "casa":
      traduccion = "house";
      break;

    case "perro":
      traduccion = "dog";
      break;

    case "pelota":
      traduccion = "ball";
      break;

    case "árbol":
      traduccion = "tree";
      break;

    case "genio":
      traduccion = "genius";
      break;

    default:
      traduccion = "la palabra ingresada es incorrecta";
  }
  return traduccion;
};

let resultado = traducir("genio");
console.log(resultado);
