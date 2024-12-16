//In console and editor global scope is different

/*
if(true){

     let a = 10 ;        //local
     var b = 20 ;        //global
     const c = 30 ;      //local
}

//console.log(a);          //error
console.log(b);          //running
//console.log(c);          //error

*/ 

// nested scope     (Example--Icecream)
/*
function one(){
     const website1 = "Website"

     function Two(){

          const website2 = "  User"
          console.log(website1+website2);
     }

     //console.log(website2);                     gives error 
     Two()
}

one()
*/


//Scope Level
/*
addOne(4)           //No error

function addOne(num){
     return num+1 
}

addOne(4)
//addTwo(7)           // cannot access addTwo function before initialization

const addTwo = function(num){
     return num+2 
}

addTwo(7)
*/