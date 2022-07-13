

/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

var carro = {
   marca: "Honda",
   modelo: "Accord",
   año: 1998
};
let objeto = (obj, str) => {
    return obj.hasOwnProperty(str);
  };

console.log(objeto(carro,'modelo'));