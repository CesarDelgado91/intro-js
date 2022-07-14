/* Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.

`const input = [12, 46, 32, 64];`

Resultado esperado:

  `{ mean: 38.5, median: 32 }` */

  const input = [12, 46, 32, 64];
  sum = input.reduce((a, b) => a + b);
  media=(sum/input.length);

  console.log("mean:"+ media) 
  
 // const median= input.
  
 