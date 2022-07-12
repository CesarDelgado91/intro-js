//problema 1.-crear una funcion que recibe 2 parametros (una oracion y la palabra a buscar). Retornar true o false en casod e que este en la oracion

var cadena = "Esto es una prueba";
var palabra = "es";

var index = cadena.indexOf(palabra);

if(index >= 0) {
    console.log("true ");
} else {
    console.log("false");
}



//problema 2.- mediante un afuncion, y dado el arreglo de enteros=[1,2,3,4,10,11], encuentra la suma de los elementos

const arr=[1,2,3,4,10,11];
const reducer = (accumulator,curr) => accumulator + curr;

console.log(arr.reduce(reducer));



//problema 3.- desarrolla un metodo para verificar si una palabra es un palindomo. casos de prueba const word1=mandam constant word=computadora

const word1 = "madam"
const word2 = "computadora"

function palindrome(word1){
    var copy = word1.replace(/\s+/g, "").toLowerCase();
    var comp = copy.split("").reverse().join("");
    return copy === comp;

}

console.log(palindrome(word1));



//problema 4.- crea un programa en donde cuentes el numero de ocurrencias que existen de una letra en una cadena

var cuenta = 0;
var miCadena = "hola mundo buenos dias";
posicion = miCadena.indexOf("o");
while ( posicion != -1 ) {
   cuenta++;
   posicion = miCadena.indexOf("o",posicion+1);
}
console.log(cuenta);



//problema 5.-escribe el metodo que retorne el numero mayor del arreglo.

  var myarray = [45,56,32,98,1000,5,23];
  var m = Math.max(...myarray);
  console.log(m)


//problema 6.- crea un programa el cual sirva para concertir temperaturas de celsius a fahrenheit y viceversa

function concertirAF(celsius){
  let fahrenheit;
  fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
console.log(concertirAF(0));


function concertirAC(fahrenheit){
  let celsius;
  celsius = (fahrenheit - 32) * (5/9);
  return celsius;
}
console.log(concertirAC(0));

