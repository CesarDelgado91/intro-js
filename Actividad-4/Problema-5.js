let i = Number(prompt("se excluira un rango de 10 numeros a partir del numero que ingrese (1 -100)"));
let fin= i + 10;

for (let index = 1; index <= 100; index++) {
    if (index > fin || index < fin) {
      console.log(index);
    }
}