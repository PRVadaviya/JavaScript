
const myNums = [1,2,3,4,5,6,7]
/*
const newNums = myNums.filter( (num) => num > 4)       //if put currly bracket in {num > 4} then not return anythings
console.log(newNums);                                  // Inside currly bracket use return keyword  

const newNums1 = myNums.map((num) => {return num+10})
console.log(newNums1);

// chaining
const newNums2 = myNums.map((num) => {return num+10}).map((num) => num*2)
console.log(newNums2);
*/
//reduce

const myTotal = myNums.reduce(function(acc,currval) {
     console.log(`acc : ${acc} and currval : ${currval}`);
     return acc + currval                                   // After a function pass a acc initial value and cuuval comes in array
} , 0)

//In arrow Function
const myTotal1 = myNums.reduce((acc,currval) =>  acc + currval, 0)
console.log(myTotal1);




