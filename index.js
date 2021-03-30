// Import stylesheets
import "./style.css";

//import './clousure_functions.js'

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>ES6</h1>`;

console.log("2.- Funciones de alto orden");

const saludar = (function() {
  var mensaje = "hola equipo NT2";

  function saludando() {
    console.log(`Mensaje a mostrar: ${mensaje}`);
  }

  //console.log(mensaje)

  return saludando;
})();

saludar();

const counter = (function() {
  let contador = 0;

  return {
    showContador: function() {
      console.log(contador);
    },
    inc: function() {
      contador++;
    },
    dec: function() {
      contador--;
    },
    sum: num => {
      contador += num;
    },
    show: () => saludar(),
    show2: function() {
      saludar();
    }
  };
})();

console.log(counter, typeof counter);

counter.showContador();
counter.inc();
counter.showContador();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.showContador();
counter.dec();
counter.showContador();
counter.sum(10);
counter.showContador();
counter.show();
counter.show2();

console.log("**** Calculadora ****");

const calculadora = (function(...numero) {
  let numeros = numero;

  //console.log(numeros);

  return {
    mostrarAlgo: function() {
      console.log("Hola muestro algo.");
    },
    sumar: function() {
      let resultado;

      numeros.forEach(function(elemento) {
        resultado += elemento;
      });

      return resultado;
    },
    restar: function() {
      let resultado;

      numeros.forEach(function(elemento) {
        resultado -= elemento;
      });

      return resultado;
    },
    multiplicar: function() {
      let resultado;

      numeros.forEach(function(elemento) {
        resultado *= elemento;
      });

      return resultado;
    },
    dividir: function() {
      let resultado;

      numeros.forEach(function(elemento) {
        resultado /= elemento;
      });

      return resultado;
    }
  };
})();

console.log(calculadora);

console.log("El resultado es: " + calculadora.sumar(2, 3));
