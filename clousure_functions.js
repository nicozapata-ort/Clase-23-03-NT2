console.log('1.- Clousure')

function helloFunction(){
  var mensaje = 'Hola America!'
  var edad = 18
  var pais = 'Argentina'

  function getMensaje(){
    return mensaje
  }
  function getEdad(){
    return edad
  }

  function saludar(){
    console.log(mensaje);
  }

  //return saludar;
  
  return {    
    getMensaje,
    getEdad,
    tipo: 'tipo',
    country: pais
  }
}

// La variable `mensaje` no esta diponible dentro del ambito global de este script.
console.log('typeof mensaje>>> ', typeof mensaje)
console.log('typeof edad>>> ', typeof edad)
//console.log(typeof saludar)


// La funcion saludar todavia hacde referencia a la variable llamada saludar
const clousure = helloFunction()
console.log(clousure.toString())


// Por la funcion clouser, `saludar()` todavia tenemos acceso a la variable dentro del ambito de la funcion `helloFunction`
console.log(clousure)

console.log(clousure.mensaje, clousure.getMensaje(), clousure.getEdad())
