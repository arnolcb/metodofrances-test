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

//Vectores
var pagos = [];
var intereses = [];
var amortizaciones = [];
var saldos = [];
var tasas = [];
var periodos = [];

var totalPagos = 0;
var totalIntereses = 0;
var totalAmortizaciones = 0;

function calcularPago(saldo, tasa, tiempo) {
  var pago;
  var pago = (saldo * tasa) / (1 - Math.pow(1 + tasa, -tiempo));
  return pago;
}

function calcularInteres(capital, tasa) {
  var intr;
  var intr = capital * (1 + tasa) - capital;
  return intr;
}

function calcularAmortizacion(pago, interes) {
  var amortizacion;
  amortizacion = pago - interes;
  return amortizacion;
}

function gen_table() {
  document.getElementById("tab").innerHTML = "";
  let n = Number(document.getElementById("prestamo").value);
  let n2 = Number(document.getElementById("tiempo").value);
  let n3 = Number(document.getElementById("tasa").value);
  //var pago = 0;
  //var saldo = 0;
  //var interes = 0;
  //var amortizacion = 0;

  var pago = calcularPago(n, n3, n2);
  var interes = 0;
  var amortizacion = 0;
  var saldo = 0;
  periodos.push(0);
  pagos.push(0);
  intereses.push(0);
  amortizaciones.push(0);
  saldos.push(n);
  if (n > 0) {
    for (i = 0; i <= n2; i++) {
      //hacer push a los vectores
      periodos.push(i);
      interes = calcularInteres(n, n3);
      amortizacion = calcularAmortizacion(pago, interes);
      saldo = n - amortizacion;

      //actualizamos prestamos
      if ( i == n2 ) {
        saldo = 0;
      }

      //push
      pagos.push(pago);
      intereses.push(interes);
      amortizaciones.push(amortizacion);
      saldos.push(saldo);
      /*
      //ca = n / n2;
      ca = pago[i];
      d1 = ca.toFixed(2);
      //i2 = (n * n3) / 100 / n2;
      i2 = interes[i];
      d2 = i2.toFixed(2);
      //r = ca + i2;
      r = amortizaciones[i];
      d3 = r.toFixed(2);
      */
     //var ca = pagos[i];
     //var i2 = intereses[i];
     //var r = amortizaciones[i];
     //var s = saldos[i];
      
      //salduki = saldos[i];
      //d4 = salduki.toFixed(2);
      document.getElementById("tab").innerHTML =
        document.getElementById("tab").innerHTML +
        `<tr>
                      <td> ${i}</td>
                      <td> ${pagos[i]}</td>
                      <td> ${intereses[i]}</td>
                      <td> ${amortizaciones[i]}</td>
                      <td> ${saldos[i]}</td>
                  </tr>`;

      totalPagos += pagos[i];
      totalIntereses += intereses[i];
      totalAmortizaciones += amortizaciones[i];
    }
    /*
    n1 = n.toFixed(2);
    t_i = i2 * n2;
    d4 = t_i.toFixed(2);
    t_p = r * n2;
    d5 = t_p.toFixed(2);*/

    /*
    var n1 = n.toFixed(2);
    var t_i = intereses.reduce((a, b) => a + b, 0);
    var d4 = t_i.toFixed(2);
    var t_p = amortizaciones.reduce((a, b) => a + b, 0);
    var d5 = t_p.toFixed(2);
    */
    //total1 = pagos.reduce((a, b) => a + b, 0);
    //total2 = intereses.reduce((a, b) => a + b, 0);
    //total3 = amortizaciones.reduce((a, b) => a + b, 0);
    //total4 = saldos.reduce((a, b) => a + b, 0);
    /*
    document.getElementById("t1").innerHTML = n1;
    document.getElementById("t2").innerHTML = d4;
    document.getElementById("t3").innerHTML = d5;
    */
    total1 = totalPagos;
    total2 = totalIntereses;
    total3 = totalAmortizaciones;
    document.getElementById("t1").innerHTML = total1.toFixed(2);
    document.getElementById("t2").innerHTML = total2.toFixed(2);
    document.getElementById("t3").innerHTML = total3.toFixed(2);
    //document.getElementById("t4").innerHTML = total4.toFixed(2);
  } else {
    alert("Falta ingresar un Número");
  }
}

function borrar_tabla() {
  document.getElementById("tab").innerHTML = "";
  document.getElementById("t1").innerHTML = "";
  document.getElementById("t2").innerHTML = "";
  document.getElementById("t3").innerHTML = "";
  
  pagos = [];
  intereses = [];
  amortizaciones = [];
  saldos = [];
  tasas = [];
  periodos = [];

  totalPagos = 0;
  totalIntereses = 0;
  totalAmortizaciones = 0;
}