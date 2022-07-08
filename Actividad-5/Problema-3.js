


 
let arreglo = [1,4,6,10,22,55,46,2,5,0];
let numero = 0;


for(i=0; i <= arreglo.length; i++){
    for( n = i+1; n <= arreglo.length -1; n++){
        if(arreglo[i] > arreglo[n]){
            numero = arreglo[i];
            arreglo[i] = arreglo[n];
            arreglo[n] = numero;
        }
    }
}
console.log(arreglo);

 
