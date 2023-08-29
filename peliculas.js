let valorarPelicula = (valoracion) => {
  let mensaje;
  switch (valoracion) {
    case "Muy mala":
      mensaje = "Calificaste la pelicula como 'Muy mala'. Lo lamentamos mucho";
      break;
    case "Mala":
      mensaje = "Calificaste la pelicula como 'Mala'. Lo lamentamos";
      break;
    case "Mediocre":
      mensaje = "Calificaste la pelicula como 'Mediocre'. Lo sentimos";
      break;
    case "Buena":
      mensaje = "Calificaste la pelicula como 'Buena'. Nos alegramos";
      break;
    case "Muy buena":
      mensaje = "Calificaste la pelicula como 'Muy buena'. Nos alegramos mucho";
      break;
    default:
      mensaje = "ingresaste un valor inválido";
  }
  return `${mensaje} y gracias por tu visita.`;
};

let resultadoValoracion = valorarPelicula("Muy buena");
console.log(resultadoValoracion);
