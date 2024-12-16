
/*
class User {

     constructor(email , password){
          this.email = email
          this.password = password
     }

     get email(){
          return this._email.toUpperCase()
     }

     set email(value){
          this._email = value 
     }

     get password(){
          return `${this._password}`
     }

     set password(value){
          this._password = value
     }
}

const chai = new User("h@hitesh.ai" , "abc")
console.log(chai.password);
console.log(chai.email);
*/

function User(email , password){
     this.email = email
     this.password = password

     Object.defineProperty(this , 'email' , {          //it's change email defination

          get: function(){
               return `${this._email}`
          } ,
          set: function(value){
               this._email = value
          }
     })

     Object.defineProperty(this , 'password' , {

          get: function(){
               return `${this._password}`
          } ,
          set: function(value){
               this._password = value
          }
     })
}

const chai = new User("chai@chai.com" , "chai")
console.log(chai.email);
console.log(chai.password);
