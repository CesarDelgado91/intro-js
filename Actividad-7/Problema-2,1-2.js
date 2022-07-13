//problema 1.- escribe unafuncion llamada multilpy que acepte dos parametros

function multilpyNumbers(x,y){
 return x*y;
}
var z = multilpyNumbers(4,5);

console.log(z)


// problema 2.-crea una funcion para calcular la sucesion fibonacci

function fibonacci(num){
    if (num<2){
        return num;
    }
    else{
        return fibonacci (num - 1) + fibonacci (num - 2);
    }
}

const nTerms =(10);

 if (nTerms <=0){
    console.log("el numero  es positivo");

 }
 else{
    for(let i = 0; i < nTerms; i++){
        console.log(fibonacci(i));
    }
 }