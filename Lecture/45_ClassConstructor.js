//ES6

/*constructor
class User{

     constructor(username , password){
          this.username = username
          this.password = password
     }

     encrptPassword(){
          return `${this.password} abc`
     }

     changeUsername(){
          return `${this.username.toUpperCase()}`
     }
}

const chai =new User("chai" , "123")
console.log(chai.encrptPassword());
console.log(chai.changeUsername());

//behind the scean

User.prototype.encrptPassword = function(){
     return `${this.password} abc`
}

const coffee =new User("chai" , "123")
console.log(coffee.encrptPassword());

*/

/*
class User{

     constructor(username){
          this.username = username
     }

     logMe(){
          return `UserName is ${this.username} `
     }
}

class Teacher extends User{                  //Inheritance
     constructor(username , password)
     {
          super(username)                    // call parent class constructor
          this.password = password
     }

     addCourse(){
          console.log(`A new course was added by ${this.username}`);
     }
}

const chai = new Teacher("Chai" , "123")
const coffee = new User("Coffee" )

chai.addCourse()
//coffee.addCourse()                    not accesable

console.log(chai.logMe())
console.log(coffee.logMe())

//chai is instance of user and teacher both where coffee is instance of only user
*/

class User{

     constructor(username){
          this.username = username
     }

     logMe(){
          return `UserName is ${this.username} `
     }

     static createId(){
          return `123`
     }
}

const tea = new User("John")

class Teacher extends User{
     constructor(username , email){
          super(username)
          this.email = email
     }
}

const iphone = new Teacher("chai" , "chai@gmail.com")
console.log(iphone);
console.log(iphone.createId());              //Not acesable

