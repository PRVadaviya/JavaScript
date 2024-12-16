
// falsy values
// false , 0 , -0 , BigInt on , "" , '' , null , undefined , NaN

// Truthy values
// "0" , 'false' , " " , [] , {} , function(){}

/*
const userEmail = [] ;

if(userEmail.length === 0){

     console.log("Array is empty");
}
*/

//??(Nullish coalescing Operator) : Null undefined

val1 = 5 ?? 10
val2 = null ?? 20        // if first value is null then take second value
val3 = undefined ?? 30

console.log(val1);
console.log(val2);
console.log(val3);

