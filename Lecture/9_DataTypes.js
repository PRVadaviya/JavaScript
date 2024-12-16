//Primitive datatypes
// String , Number , Boolean , Null , undefined , Symbol , BigInt

//Reference (Non primitive)
//Array , Objects , Functions

//javascript is dynamic type language

const id = Symbol('123')
const anotherid = Symbol('123');

console.log(id === anotherid);

//Array
const heros = ["shaktiman" , "naagraj" , "bhim"];

//Objects
let myObj = {

     name:"john",
     age:22
};

//function
const myFun = function(){

     console.log("Hello World");
}

console.log(typeof heros);
