


/* Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.

Caso de prueba:

`const input = 6;`

Result: `720` */


const input = 6;

let r= 1;
for (let i = input; i>0; i--){
    r *= i;
}
console.log(r);