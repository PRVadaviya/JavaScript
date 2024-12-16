
// Prefer not to use var because of issue in block scope 
// functional scope

let accountState;

console.log("2"  === 2);

console.table([accountState])

console.log(typeof null)  // object
console.log(typeof undefined)  // undefined

//
/*   String to Number
     "33" => 33
     "33abc" => Nan
     true => 1 ; false => 0
*/

/*   Number to Boolean
     1 => true ; 0 => false
     "" => false
     "hitesh" => true
*/
const score = "" ;
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//stack and heap 

/*
     Stack => primitive datatype
     heap  => Non - primitive datatype

     Stack create copy &&
     Heap give reference
*/

let myGmail = "abc@gmail.com"

let anotherGmail = myGmail         //Here create copy of myGmail in stack
anotherGmail = "def@gmail.com"

console.log(myGmail);
console.log(anotherGmail);

//Heap

let myStudent = {

     email : "abc@gmail.com",
     phone : 981851651565 , 
}

let secondStudent = myStudent           //it gives references of myStudent

secondStudent.email = "ghi@gmail.com"        //changes in both object

console.log(myStudent);
console.log(secondStudent);

//conversion

console.log(1 + 1 + "3");
console.log("1" + 1 + 3);

console.log(+true);
//console.log(true+);              gives error
console.log(+"");

// comparison

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0 );       //false 0>0
console.log(null == 0 );      //It's treat different way for comparison 
console.log(null >= 0 );      //true 0>=0

// comparison convert null to a number , treating it as 0




