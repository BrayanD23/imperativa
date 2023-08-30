let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    let cliente;
    for (let i = 0; i < arrayCuentas.length; i++) {
      cliente = arrayCuentas[i].titularCuenta;
      if (cliente === titular) {
        return arrayCuentas[i];
      }
    }
    return "cliente no encontrado";
  },
  deposito: function (titular, deposito) {
    let cliente = this.consultarCliente(titular);
    let mensaje1 = `Su saldo era de ${cliente.saldoEnPesos}`;
    let saldo = (cliente.saldoEnPesos += deposito);
    let mensaje2 = `Depósito realizado, su nuevo saldo es ${saldo}`;
    return `${mensaje1}. ${mensaje2} `;
  },
  extraccion: function (titular, retiro) {
    let cliente = this.consultarCliente(titular);
    let mensaje1 = `Su saldo era de ${cliente.saldoEnPesos}`;
    let saldo = (cliente.saldoEnPesos -= retiro);
    let mensaje2 = `Retiro realizado, su nuevo saldo es ${saldo}`;
    let mensajeFinal;
    if (saldo <= 0) {
      mensajeFinal = "Fondos insuficientes";
    } else {
      mensajeFinal = `${mensaje1}. ${mensaje2} `;
    }
    return mensajeFinal;
  },
};

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);

let depositoCliente = banco.deposito("Abigael Natte", 29);
console.log(depositoCliente);

let retiroCliente = banco.extraccion("Abigael Natte", 1);
console.log(retiroCliente);

console.log("------------------------------");
//extras

// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
let calularNotas = function () {
  let acumulador = 0;
  for (let i = 0; i < this.notas.length; i++) {
    acumulador += this.notas[i];
  }
  return acumulador / this.notas.length;
};

let buscarPromedio = function (nombreAlumno) {
  let x = 0;
  let mensajeFinal;
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].nombre === nombreAlumno) {
      x = alumnos[i].promedio();
      if (x >= 6) {
        mensajeFinal = `aprobó con ${x}`;
      } else {
        mensajeFinal = `reprobó con ${x}`;
      }
      return `${nombreAlumno} ${mensajeFinal}`;
    }
  }
};

let alumnos = [
  {
    nombre: "Coby",
    numeroID: 1231234,
    notas: [10, 10, 10, 10],
    promedio: calularNotas,
  },
  {
    nombre: "Juan",
    numeroID: 1231235,
    notas: [10, 10, 10, 9],
    promedio: calularNotas,
  },
  {
    nombre: "Ele",
    numeroID: 2231234,
    notas: [10, 10, 10, 8],
    promedio: calularNotas,
  },
  {
    nombre: "Ale",
    numeroID: 3231234,
    notas: [10, 10, 10, 7],
    promedio: calularNotas,
  },
  {
    nombre: "Litu",
    numeroID: 4231234,
    notas: [10, 10, 10, 6],
    promedio: calularNotas,
  },
];

let notasLitu = buscarPromedio("Litu");
console.log(notasLitu);
