/*
document.getElementById("calcular-int").addEventListener("click", function() {
  // Obtener los valores de los elementos
  var prestamo = parseFloat(document.getElementById("prestamo").value);
  var tasa = parseFloat(document.getElementById("tasa").value);
  var tipoTasa = parseInt(document.getElementById("tipoTasa").value);
  var tiempo = parseFloat(document.getElementById("tiempo").value);
  var periodoTiempo = parseInt(document.getElementById("periodoTiempo").value);
  var tipoMoneda = parseInt(document.getElementById("tipoMoneda").value);

  // Realizar cálculos
  var interes = 0;

  if (tipoTasa === 1) {
    // Tasa anual
    interes = prestamo * tasa * tiempo;
  } else if (tipoTasa === 2) {
    // Tasa mensual
    if (periodoTiempo === 1) {
      // Años a meses
      tiempo *= 12;
    }
    interes = prestamo * tasa * tiempo;
  } else if (tipoTasa === 3) {
    // Tasa diaria
    if (periodoTiempo === 1) {
      // Años a días
      tiempo *= 365;
    } else if (periodoTiempo === 2) {
      // Meses a días
      tiempo *= 30;
    }
    interes = prestamo * tasa * tiempo;
  }

  // Actualizar el valor del div "interés final"
  var valueDiv = document.querySelector(".int-final");
  if (tipoMoneda === 2) {
    // Dólares
    valueDiv.textContent = "$ " + interes.toFixed(2);
    //Mostrar usando inner
    valueDiv.innerText = "$ " + interes.toFixed(2);
  } else {
    // Soles (Moneda por defecto)
    valueDiv.textContent = "S/ " + interes.toFixed(2);
    //Mostrar usando inner
    valueDiv.innerText = "S/ " + interes.toFixed(2);
  }
});
*/

var valueElements = document.querySelectorAll(".result div.value");
var calculateBtn = document.querySelector("#calculate-btn");
calculateBtn.addEventListener("click", function () {
  valueElements.forEach(function (element) {
    element.innerText = "PruebaadadsXXDD";
  });
});

//Borrar los valores de los elementos result div value si se hace click en el boton cancel-btn
var cancelBtn = document.querySelector("#cancel-btn");
cancelBtn.addEventListener("click", function () {
  valueElements.forEach(function (element) {
    element.innerText = "";
  });
});

//Algoritmo
//Vectores
let pagos = [];
let intereses = [];
let amortizaciones = [];
let saldos = [];
let tasas = [];
let periodos = [];

let totalPagos = 0;
let totalIntereses = 0;
let totalAmortizaciones = 0;


class TablaDePagos {
  constructor(prestamo, pago, interes, amortizacion, saldo, tasa, tiempo, tipoTiempo, tipoTasa, moneda) {
      this.prestamo = prestamo;
      this.pago = pago;
      this.interes = interes;
      this.amortizacion = amortizacion;
      this.saldo = saldo;
      this.tasa = tasa;
      this.tiempo = tiempo;
      this.tipoTiempo = tipoTiempo;
      this.tipoTasa = tipoTasa;
      this.moneda = moneda;
  }

  calcularPago(saldo, tasa, tiempo) {
      let pago = (saldo * tasa) / (1 - Math.pow((1 + tasa), -tiempo));
      return pago;
  }

  calcularInteres(capital, tasa, tiempo) {
      let intr = (capital * (1 + tasa)) - capital;
      return intr;
  }

  calcularAmortizacion(pago, interes) {
      let amortizacion = pago - interes;
      return amortizacion;
  }

  asignar() {
      this.pago = this.calcularPago(this.prestamo, this.tasa, this.tiempo);
      periodos.push(0);
      pagos.push(0);
      intereses.push(0);
      amortizaciones.push(0);
      saldos.push(this.prestamo);

      for (let i = 1; i <= this.tiempo; i++) {
          periodos.push(i);

          this.interes = this.calcularInteres(this.prestamo, this.tasa, i);
          this.amortizacion = this.calcularAmortizacion(this.pago, this.interes);
          this.saldo = this.prestamo - this.amortizacion;

          this.prestamo = this.saldo;
          if (i === this.tiempo) {
              this.saldo = 0;
          }

          pagos.push(this.pago);
          intereses.push(this.interes);
          amortizaciones.push(this.amortizacion);
          saldos.push(this.saldo);
      }
  }

  mostrarTabla() {
      console.log("");
      console.log("\tTabla de pagos");
      console.log("");
      console.log("Periodo\tPago\tInteres\tAmortizacion\tSaldo");
      for (let i = 0; i < periodos.length; i++) {
          console.log(periodos[i] + "\t" + pagos[i] + "\t" + intereses[i] + "\t" + amortizaciones[i] + "\t" + saldos[i]);
          totalPagos += pagos[i];
          totalIntereses += intereses[i];
          totalAmortizaciones += amortizaciones[i];
      }

      console.log("\n");
      console.log("Total\t" + totalPagos + "\t" + totalIntereses + "\t" + totalAmortizaciones + "\t---");
  }
}

//Guardar en variables todos los elementos del tipo input
var prestamo = document.querySelector("#prestamo");
var tasa = document.querySelector("#tasa");
var tiempo = document.querySelector("#tiempo");
var tipoTasa = document.querySelector("#tipoTasa");
var periodoTiempo = document.querySelector("#periodoTiempo");
var tipoMoneda = document.querySelector("#tipoMoneda");

//Funciones para calcular
var result = document.querySelectorAll(".in-info div.int-final");
var btnCalcular = document.querySelector("#calcular-int");
btnCalcular.addEventListener("click", function () {
  /*
interes.forEach(function(element) {
  element.innerText = 'Pruebasdasdasdasda';
  });*/
  //var interesfinal = 0;
  //interesfinal = prestamo.value * tasa.value * tiempo.value;
  
  //var pagoUser = 0;
  //var _interesUser = 0;
  //var amortizacionUser = 0;
  //var pagoUser = pago(prestamo, tasa, tiempo);
  //var _interesUser = _interes(prestamo, tasa, tiempo);
  //var amortizacionUser = amortizacion(pagoUser, _interesUser);

  //interesfinal += pagoUser;

  result.forEach(function (element) {
    //element.innerText = pagoUser.toFixed(2);
    //element.innerText = _interesUser.toFixed(2);
    //element.innerText = amortizacionUser.toFixed(2);
    element.innerText = "Prueba";
  });
});

//borrar contenido con el boton #borrar-int
var btnBorrar = document.querySelector("#borrar-int");
btnBorrar.addEventListener("click", function () {
  result.forEach(function (element) {
    element.innerText = "";
  });
});

/*
document.getElementById("calcular-int").addEventListener("click", function() {
  // Obtener los valores de los elementos
  var prestamo = parseFloat(document.getElementById("prestamo").value);
  var tasa = parseFloat(document.getElementById("tasa").value);
  var tipoTasa = parseInt(document.getElementById("tipoTasa").value);
  var tiempo = parseFloat(document.getElementById("tiempo").value);
  var periodoTiempo = parseInt(document.getElementById("periodoTiempo").value);
  var tipoMoneda = parseInt(document.getElementById("tipoMoneda").value);

  // Realizar cálculos
  var interes = 0;

  if (tipoTasa === 1) {
    // Tasa anual
    interes = prestamo * tasa * tiempo;
  } else if (tipoTasa === 2) {
    // Tasa mensual
    if (periodoTiempo === 1) {
      // Años a meses
      tiempo *= 12;
    }
    interes = prestamo * tasa * tiempo;
  } else if (tipoTasa === 3) {
    // Tasa diaria
    if (periodoTiempo === 1) {
      // Años a días
      tiempo *= 365;
    } else if (periodoTiempo === 2) {
      // Meses a días
      tiempo *= 30;
    }
    interes = prestamo * tasa * tiempo;
  }

  // Actualizar el valor del div "interés final"
  var valueDiv = document.querySelector(".int-final");
  if (tipoMoneda === 2) {
    // Dólares
    valueDiv.textContent = "$ " + interes.toFixed(2);
    //Mostrar usando inner
    valueDiv.innerText = "$ " + interes.toFixed(2);
  } else {
    // Soles (Moneda por defecto)
    valueDiv.textContent = "S/ " + interes.toFixed(2);
    //Mostrar usando inner
    valueDiv.innerText = "S/ " + interes.toFixed(2);
  }
});
*/
