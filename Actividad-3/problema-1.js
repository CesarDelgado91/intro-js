let edad = 0;
let nombre = "";


nombre =  (prompt("cual es tu nombre"));
edad = Number(prompt("¿Que Edad Tienes?"));

if ( edad >= 18){
    console.log("puedes entrar" )
    if(nombre == "carlos"  || nombre == "mario"){
        console.log("Entra VIP")
    }
}
 
else{
    console.log("no puedes entrar")
}




