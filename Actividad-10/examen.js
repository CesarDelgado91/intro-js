


//### Problema 1:

//Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.

//```jsx
const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];


function getEdad(arr){
 const edades = Family.map((objeto) => objeto.age);
 edades.sort(function (a,b){return a-b});
 let dife=(edades[edades.length-1])-edades[0];
 Family.push({oldest:edades[0],youngest:edades[edades.length-1], "age-difference":dife});
 return Family;
}
console.log(getEdad(Family));




/* Expected result:
​
```jsx
	{
    oldest: 67,
    youngest: 13,
    'age-difference': 54
  }
``` */


/* ### Problema 2
​
Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. */

const numbers = [ 1, -4, 12, 0, -3, 29, -150];

let suma = 0
const filtro = numbers.filter((valor) => valor >= 0);

for (let i = 0; i < filtro.length; i++){
    suma += filtro[i]
}

console.log(suma)


// ### Problema 3
/* ​Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada dada es una matriz, cuyos elementos son matrices de cadenas. El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices y su valor es el número de sus ocurrencias.
​```jsx */


const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

var result = { }; 
 

console.log(result);



 /*  Resultado esperado:
​```jsx
{
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }
```
​ */


/* ### Problema 4
​
Escriba una función de JavaScript que tomará una serie de números almacenados
​
y encontrará el segundo número más bajos y segundos más altos, respectivamente
​
del siguiente arreglo:   */

const arr = [3,4,6,1,5,2,9,10,23,12]

let lista = arr.sort((a,b) => a-b);

const segbajo = lista[1];

const segalto = lista[lista.length-2];

console.log("Este es el Numero segundo mas bajo:", segbajo+"\n Este es el Numero segundo mas alto:",segalto)


/* ### Problema 5:

De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.

```jsx */

let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]



// 1. Retorna en un array las calificaciones de todos los estudiantes.
const calificacion = materias.map((materias) => materias.calificacion);

console.log(calificacion);


// 2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto: 

/* [
  { 
    "Jorge": {
      "promedio": 8.6
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  }
] */


// 1. Retorna la calificación mas baja

//2. Retorna la calificación mas alta




// ### Problema 6


// Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.


matriz = [7,2,5,3,5,3]

br = [7,2,5,4,6,3,5,3]


for(let num of br){

  if(!matriz.includes(num)){

      console.log(num)
  }
}

// Los números que faltan en arr son `[4,6]`
// ### Problema 7

// **Objetos-Recursividad:**


//Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad `id`


const root2 = {
  id: '123',
  child: [{
    id: '234',
    child: [{
      test: {
        id: 2
      }
    }]
  }],
  child2: [{
    id: '345',
    child3: {
      id: '534'
    }
  }]
};


const id = root2.map((root2) => root2.id);

console.log(id);

//Contraer

marca_de_verificación_blanca
ojos
manos_levantadas












