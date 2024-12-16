//JavaScript Arrays are resizable and allow to multiple datatypes

// javascript array-copy-functions create shallow copy 

//shallow copy-- an object is a copy share whose properties share the same references
//deep copy -- an object is a copy share whose properties do not share the same references

/*
//Declare
let myArray = [0 , 1 , 3, "yt"];
console.log(myArray[3]);
*/

/*
//Array methods -- Explore
myArray.push(7);
console.log(myArray);
console.log(typeof myArray);                 // Object


const newArray = myArray.join();
console.log(newArray);
console.log(typeof newArray);           // now type of newArray becomes String
*/

/*
//slice and splice

const myArray = [1,2,3,4,5,6,7,9,10]
console.log(myArray)

const myn1 = myArray.slice(1,4);        // Give Array of 1 to 3 element
console.log(myn1);
console.log("A  " , myArray);

const myn2 = myArray.splice(1,4);       // Remove 1 to 3 element of myArray 
console.log(myn2);
console.log("B  " , myArray);
*/

/*
// Part -- 2

const myHero = ["Iron" , "Super"];
const myAddHero = ["Hulk" , "Archer"];

//myHero.push(myAddHero);
console.log(myHero);               // add myAddHero array in myHero at 3 index  --[ 'Iron', 'Super', [ 'Hulk', 'Archer' ] ] 

const newArray = myHero.concat(myAddHero);             //[ 'Iron', 'Super', 'Hulk', 'Archer' ]
console.log(newArray); 


const another_array = [1,2,3,[5,8,7],45,[1,9,[5,98]]] ;
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);
*/

console.log(Array.isArray("John"));
console.log(Array.from("John"));

let a = 100 , b=200 , c=300;

console.log(Array.of(a,b,c));

