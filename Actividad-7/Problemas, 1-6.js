//problema 1



//problema 2

const arr=[1,2,3,4,10,11];
const reducer = (accumulator,curr) => accumulator + curr;

console.log(arr.reduce(reducer));


//problema 3

var word = "madam"

function palindrome(word){
    var copy = word.replace(/\s+/g, "").toLowerCase();
    var comp = copy.split("").reverse().join("");
    return copy === comp;
}

console.log(palindrome(word))

//problema 4

//problema 5

  var myarray = [45,56,32,98,1000,5,23];
  var m = Math.max(...myarray);
  console.log(m)


//problema 6


 