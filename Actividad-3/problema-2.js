


let jugador1 = 0;
let jugador2 = 0;

jugador1 = Number(prompt("jugador 1 elige: [1] piedra, [2] papel o [3] tijeras"));
jugador2 = Number(prompt("jugador 2 elige: [1] piedra, [2] papel o [3] tijeras"));


switch(jugador1){
  
   case 1:
       switch(jugador2){
         case 1:
            console.log("empate");
            break;
        case 2:
            console.log("gana jugador 2");
            break;
            
        case 3:
            console.log("gana jugador 1");
            break;    
       }
       break;
    case 2:
        switch(jugador2){
          case 1:
             console.log("gana jugador 1");
             break;
         case 2:
             console.log("empate");
             break;
             
         case 3:
             console.log("gana jugador 2");
             break;    
        }
        break;
   case 3:
       switch(jugador2){
         case 1:
            console.log("gana gugador 2");
            break;
        case 2:
            console.log("gana jugador 1");
            break;
            
        case 3:
            console.log("empate");
            break;    
    
    }
    break;
}


