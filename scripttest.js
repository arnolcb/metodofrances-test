//var result = document.querySelectorAll(".in-info div.int-final");
//var btnCalcular = document.querySelector("#calcular-int");
//btnCalcular.addEventListener("click", function () {
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

  //result.forEach(function (element) {
    //element.innerText = pagoUser.toFixed(2);
    //element.innerText = _interesUser.toFixed(2);
    //element.innerText = amortizacionUser.toFixed(2);
    //element.innerText = "Prueba";
  //});
//});

//borrar contenido con el boton #borrar-int
//var btnBorrar = document.querySelector("#borrar-int");
/*btnBorrar.addEventListener("click", function () {
  result.forEach(function (element) {
    element.innerText = "";
  });
});
*/

//Vectores
var pagos = [];
var intereses = [];
var amortizaciones = [];
var saldos = [];
var tasas = [];
var periodos = [];

var totalPagos;
var totalIntereses;
var totalAmortizaciones;

totalPagos = number(totalPagos);
totalIntereses = number(totalIntereses);
totalAmortizaciones = number(totalAmortizaciones);

//volverlos numeros
totalPagos = Number(totalPagos);
totalIntereses = Number(totalIntereses);
totalAmortizaciones = Number(totalAmortizaciones);

/*Data results*/
var dataresult = document.querySelectorAll(".result div.value");

function calcularPago(saldo, tasa, tiempo) {
  var pago;
  pago = (saldo * tasa) / (1 - Math.pow(1 + tasa, -tiempo));
  return pago;
}

function calcularInteres(capital, tasa) {
  var intr;
  intr = ((capital *(1+tasa))-capital);
  return intr;
}

function calcularAmortizacion(pago, interes) {
  var amortizacion;
  amortizacion = pago - interes;
  return amortizacion;
}

function igualartiempos(tiempo, tipoTiempo, tasa, tipoTasa){
  if(tipoTiempo == 1)
  {
    if(tipoTasa ==2)
    {
      //Tasa mensual a anual
      tasa = Math.pow(1+tasa, 12)-1;
    }
    else if (tipoTasa == 3)
    {
      //Tasa diaria a anual
      tasa = Math.pow(1+tasa, 360)-1;
    }
  }

  else if(tipoTiempo == 2)
  {
    if(tipoTasa == 1)
    {
      //Tasa anual a mensual
      tasa = Math.pow(1+tasa, 1/12)-1;
    }
    else if (tipoTasa == 3)
    {
      //Tasa diaria a mensual
      tasa = Math.pow(1+tasa, 30)-1;
    }
  }

  else if(tipoTiempo == 3)
  {
    if (tipoTasa == 1)
    {
      //Tasa anual a diaria
      tasa = Math.pow(1+tasa, 1/360)-1;
    }
    else if (tipoTasa == 2)
    {
      //Tasa mensual a diaria
      tasa = Math.pow(1+tasa, 1/30)-1;
    }
  }
}

function gen_table() {
  document.getElementById("tab").innerHTML = "";
  let n = Number(document.getElementById("prestamo").value);
  let n2 = Number(document.getElementById("tiempo").value);
  let n3 = Number(document.getElementById("tasa").value);

  let codTasa = document.getElementById("tipoTasa").value;
  let codTiempo = document.getElementById("periodoTiempo").value;
  let codMoneda = document.getElementById("tipoMoneda").value;
  //var pago = 0;
  //var saldo = 0;
  //var interes = 0;
  //var amortizacion = 0;

  //Obtener valores de los select
  //var tipoTiempo = document.getElementById("tipoTiempo").value;
  //var tipoTasa = document.getElementById("tipoTasa").value;

  //Pasar a numeros
  //tipoTiempo = Number(tipoTiempo);
  //tipoTasa = Number(tipoTasa);
  //console.log(tipoTiempo);
  //console.log(tipoTasa);
  //Igualar tiempos
  //igualartiempos(n2, tipoTiempo, n3, tipoTasa);

  var pago = calcularPago(n, n3, n2);
  pago = pago.toFixed(2);
  var interes = 0;
  var amortizacion = 0;
  var saldo = 0;
  periodos.push(0);
  pagos.push(0);
  intereses.push(0);
  amortizaciones.push(0);
  saldos.push(n);
  //var saldoiterador = 0;
  if (n > 0) {
    for (i = 0; i <= n2; i++) {
      //hacer push a los vectores
      periodos.push(i);
      saldoiterador = saldos[i];
      interes = calcularInteres(n, n3);
      interes = interes.toFixed(2);
      amortizacion = calcularAmortizacion(pago, interes);
      amortizacion = amortizacion.toFixed(2);
      saldo = n - amortizacion;
      saldo = saldo.toFixed(2);
      
      n = saldo;
      //actualizamos prestamos
      if ( i+1 == n2 ) {
        saldo = 0;
      }

      //push
      pagos.push(pago);
      intereses.push(interes);
      amortizaciones.push(amortizacion);
      saldos.push(saldo);

      //totales
      //totalPagos += pagos[i];
      //totalIntereses += intereses[i];
      //totalAmortizaciones += amortizaciones[i];
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
    }
    /*
    for(i =0; i < periodos.length; i++){
      totalPagos += pagos[i];
      totalIntereses += intereses[i];
      totalAmortizaciones += amortizaciones[i];
    }*/
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
    document.getElementById("t1").innerHTML = total1;
    document.getElementById("t2").innerHTML = total2;
    document.getElementById("t3").innerHTML = total3;
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

/* script inicial */
/*
var valueElements = document.querySelectorAll(".result div.value");
var calculateBtn = document.querySelector("#calculate-btn");
calculateBtn.addEventListener("click", function () {
  /*valueElements.forEach(function (element) {
    element.innerText = "PruebaadadsXXDD";
  });
  //ingresar solo en el primer elemento
  valueElements[0].innerText = "PruebaadadsXXDD";
});

//Borrar los valores de los elementos result div value si se hace click en el boton cancel-btn
var cancelBtn = document.querySelector("#cancel-btn");
cancelBtn.addEventListener("click", function () {
  valueElements.forEach(function (element) {
    element.innerText = "";
  });
});
*/