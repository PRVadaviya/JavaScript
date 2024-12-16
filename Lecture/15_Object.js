// Object literals

//create Object

const mySym = Symbol("key1");
const objUser = {

     userId : 123 ,
     age : 23 ,
     isLoggedin : false,
     "FirstName" : "John",
     [mySym] : "Devil"                  // square bracket must require when using symbol
}


// console.log(objUser.age);
// console.log(objUser["userId"]);
// console.log(objUser."FirstName");          //Error
// console.log(objUser["FirstName"]);
// console.log(objUser[mySym]);

//Note ::::::

// console.log(Object.keys(objUser));
// console.log(Object.values(objUser));
// console.log(Object.entries(objUser));
// console.log(objUser.hasOwnProperty('age'));            //return true if key exist otherwise return false

// Function 
/*
objUser.greeting = function () {
     
     console.log(`Hello , User ${this.FirstName}`);    
}

console.log(objUser.greeting());
*/

//Onject Inside Object
/*
const tinderUser = new Object();        //singlton object
const tinderUser1 = {} ;                //Non singlton object


tinderUser1.fullName = "John" ;
tinderUser1.Id = 156 ;

const regularUser = {

     email : "abc@gmail.com" ,
     fullname : {
          userfullname : {
               firstName : "Devil",
               lastName : "BatMan"
          }
     }
}

console.log(regularUser.fullname.userfullname.firstName);
*/

/*
//Merge two Object

const  obj1 = {1:"a" , 2:"b"}
const  obj2 = {3:"a" , 4:"b"}

const obj3 = {obj1 , obj2}
console.log(obj3);                  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({} ,obj1 , obj2)
const obj5 = {...obj1 , ...obj2}      //It's simple another method to join two object
console.log(obj4);                    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

*/

//Object de-Structure

const course = {

     courseName : "javascript" ,
     price : 253 ,
     courseInstructor : "john"
}

// basicly it's replace course.courseName into below code

const {courseInstructor : ci} = course
console.log(ci);


