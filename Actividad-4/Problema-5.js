let inicio = Number(prompt("Se excluiran 10 numeros a partir del numero que indique (1 -100)"));
let fin= inicio + 10;

for (let index = 1; index <= 100; index++) {
    if (index > fin || index < fin) {
      console.log(index);
    }
}