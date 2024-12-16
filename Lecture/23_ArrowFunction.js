
//THIS
/*
const user = {
     userId : 145 ,
     userName : "John" ,
     welcomeMessage : function(){
          console.log(`${this.userName} , Welcome to website`);
          console.log(this);         
     }
}

user.welcomeMessage()
user.userName = "Sam"
user.welcomeMessage()         // check Output

console.log(this);            // it's point to global null object
//NOTE :::::                  In browser global object in window object
*/

/*
const coffee = function (){
     let userName = "john"
     console.log(this);            //It's give something
     console.log(this.userName);        //Undefined
}

coffee()
*/

//Arrow Function
/*
const coffee = () => {
     let userName = "john"
     console.log(this);                      //REMARK(difference between this and arrow)::---give return null object
     console.log(this.userName);             //Undefined
}

coffee()
*/

const addTwo = (num1 , num2) => {return num1+num2}     //explicit return          //in currly bracket return statement is require
const addThree = (num1 , num2,num3) => (num1+num2+num3)  //implicit return        //in round bracket no need to return statement  

console.log(addTwo(10,45));
console.log(addThree(10,45,60));