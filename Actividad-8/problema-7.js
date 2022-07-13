
/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/

const objeto = {};
Object.defineProperties(objeto, {
    color: {
     value: "blanco",
     writable: true
    },
    tamano: {
     value: 10,
     writable:true
    },

    peso: {
      value: 15,
      writable:true

    },

    cantidad: {
        value: 20,
        writable:true
    }
});

console.log(objeto.color);

