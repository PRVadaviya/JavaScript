// javascript is prototyped based language

//object literals
/*
const user = {
     username : "John" ,
     loginCount : 8 ,
     signedIn : true ,

     getUserDetails : function(){
          // console.log(username)            if you are write only username then give error becuse of not known which user object's username want to print
          console.log(this.username);
          console.log(this);
     }
}

console.log(user.username);
*/

//Prototypes (Magic of new keyword)
// Here function treated as a objects 
// javascript goes to as much possible find prototypes

function createUser(username , score){
     this.username = username
     this.score = score
}

createUser.prototype.increment = function(){
     this.score++                                 //Remember this keyword is important
}

createUser.prototype.printMe = function(){
     console.log(`score is ${this.score}`)
}

const tea = new createUser("Chai" , 25)
const coffee = new createUser("Coffee" , 250)

tea.printMe()

//A new object is created : The new keyword initiates the creation of a new javascript object
