


let numero1 = Number(prompt("ingresa el primer numero"));
let numero2 = Number(prompt("ingresa el segundo numero"));
let numero3 = Number(prompt("ingresa el tercer numero"));


if (numero1 > numero2 && numero1 > numero3){
    console.log("el numero " + numero1 + " es mayor")
}

else if(numero2 > numero1 && numero2 > numero3){
    console.log("el numero " + numero2 + " es mayor");
}
else if(numero3 > numero1 && numero3 >numero2){
    console.log("el numero " + numero3 + " es mayor")
}
else if(numero1 == numero2 && numero1 >numero3){
    console.log("los numeros  " + numero1 + " son mayores o iguales")
}
else if(numero1 == numero3 && numero1 > numero2){
    console.log("los numeros  " + numero1 + " son mayores o iguales")
}


else{
    console.log("los numeros " + numero2 + " son mayores o iguales");
}