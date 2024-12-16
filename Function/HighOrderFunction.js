/*//HighOrderFunction
// If any function catch / return other function it called high order function

var arr = [1,2,3,4];

//foreach function and inside that one more function
arr.forEach(x=>console.log(x));

*/

/*
//Constructor

var taste ;

function Biscuit(){

     this.width = 12 ;
     this.height = 10 ;
     this.taste = "salty" ;
     this.color = "brown"  ;
}                                

var bis1 = new Biscuit();
var bis2 = new Biscuit();
var bis3 = new Biscuit();
*/
/*
//First Class Function 

// Those Function can store in a variable it's called ...

var fun = function abcd(){};
*/

/*
//iife    - immediately invoked function expression    (instantly run iife functions)

var ans = (function(){
     var privateVar = 3 ;

     return{

          getter : function(){
               console.log(privateVar);
          },

          setter : function(val){
               privateVar = val ;
          }
     }
})()

*/

/*
//Prototype

//when you are create any object , some properties autometic define by javascript which is not define self .

//EXA-> create array and his contains length properties which not define at time .

*/
/*
//Inheritanse

var cityHuman = { canTalk : true ,
              canfly : false
};

var villageHuman = { canHardWork : true ,
                     canStuggle : true 
}

//REMARK
villageHuman.__proto__ = cityHuman ;
*/

/*
//this

// Any function,variable,object inside {} that means it's in local scope other hand outside {} global scope .
// Those function has inside object it's called METHOD .

var number = 12 ;   //global  

function check(){
     console.log(this);       //try to run
     var istrue = true ;   //local scope          //value => Window
}

console.log(this);       //value => Window

var obj = {
     name: "John" ,
     getter : function(){
          console.log(this);                      //value => Object
     }                   // getter METHOD
};

obj.getter();

//in any method , THIS keyword always refers to parent object

*/

// call , apply , bind


/*   //call
function abcd(val1 , val2 , val3){
     console.log(this , val1 , val2 , val3);       //now THIS point to obj
}
var obj = {age : 18} ;

abcd.call(obj , [1,2,3]);     //call && check output
*/

//bind
/*
function abcd(){
     console.log(this);       //now THIS point to obj
}
var obj = {age : 18} ;

var binded  =  abcd.bind(obj);     //it's Merge abcd and obj , it's return one binded function
binded();
*/

/*
//pure and impure function

// IMPURE -- It's return differnt value for give same input
function process(val1){

     return Math.random()*val1 ;
}

var num1 = process(2);
var num2 = process(2);


//PURE -- It's return same value for give same input

function process(val1){

     return 2*val1 ;
}

var num1 = process(2);
var num2 = process(2);
*/