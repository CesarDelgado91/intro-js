
// problema-1 Concatena los siguientes arreglos

var animals= ['eagle','parrot','monkey','boar','lion']
var comingSoonAnimals=['panter','dragon','turtle']
var arrayconca=animals.concat(comingSoonAnimals);

console.log(arrayconca);


// problema 1 acomoda el arreglo de menor a mayor

var arr = [4,6,1,0,8,2,45,11,5,33,50,101]

arr.sort(function(a,b){return a-b});


//problema 2 agrega un nuevo animal ('cow')

var animals= ['eagle','parrot','monkey','boar','lion']
var comingSoonAnimals=['panter','dragon','turtle']
var arrayconca=animals.concat(comingSoonAnimals);

arrayconca.push('cow')

console.log(arrayconca);


// problema 3 retira el elemento 'eagle' del arreglo animals

var animals= ['eagle','parrot','monkey','boar','lion']

animals.shift();

console.log(animals);

//problema 4 encuentra el index del animal 'parrot'

var animals= ['eagle','parrot','monkey','boar','lion']

console.log(animals.indexOf('parrot'));
