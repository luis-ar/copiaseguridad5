var num1;
var num2;
var operacion;

function init() {
  var resultado = document.getElementById("pantalla");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var division = document.getElementById("division");
  var multiplicacion = document.getElementById("multiplicacion");
  var borrar = document.getElementById("borrar");
  var igual = document.getElementById("igual");
  var punto = document.getElementById("punto");
  var cero = document.getElementById("cero");
  //teclas
  uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
  };
  dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
  };
  tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
  };
  cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
  };
  cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
  };
  seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
  };
  siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
  };
  ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
  };
  nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
  };
  punto.onclick = function (e) {
    resultado.textContent = resultado.textContent + ".";
  };
  cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
  };
  //operadores
  borrar.onclick = function (e) {
    resetear();
  };
  igual.onclick = function (e) {
    num2 = resultado.textContent;
    respuesta();
  };
  resta.onclick = function (e) {
    num1 = resultado.textContent;
    operacion = "-";
    limpiar();
  };
  multiplicacion.onclick = function (e) {
    num1 = resultado.textContent;
    operacion = "X";
    limpiar();
  };
  division.onclick = function (e) {
    num1 = resultado.textContent;
    operacion = "/";
    limpiar();
  };
  suma.onclick = function (e) {
    num1 = resultado.textContent;
    operacion = "+";
    limpiar();
  };
  function limpiar() {
    resultado.textContent = "";
  }
  function resetear() {
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
  }
  function respuesta() {
    var solu = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operacion == "+") {
      solu = num1 + num2;
    } else if (operacion == "-") {
      solu = num1 - num2;
    } else if (operacion == "X") {
      solu = num1 * num2;
    } else if (operacion == "/") {
      solu = num1 / num2;
    }
    resetear();
    resultado.textContent = solu;
  }
}
