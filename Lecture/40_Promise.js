
//The Promise object represents the eventual comoletion(failure) of an 
//asynchronous operation and its resulting value

// Promise will complete works in future 

/*
const promiseOne = new Promise(function(resolve , reject){

     //Do an async task
     //DB calls , cryptography , network

     setTimeout(function(){

          console.log("Async task complete");
          resolve()                              //This connected with then

     },2000)
}) 

promiseOne.then(function(){             //then directly connected with resolve 
     console.log("Promise consumed");  
})

*/
//   Data Pass Through resolver
/*
const promiseTwo = new Promise(function(resolve,reject){

     setTimeout(function(){
          resolve({username:"Coffee" , 
                   email : "Coffee@example.com" 
          })
     } , 1000)
})

promiseTwo.then(function(user){
     console.log(user);
     
})
*/

/*
const promiseThree = new Promise(function(resolve,reject){

     setTimeout(function(){
          let error = false

          if(!error){
               resolve({username:"Coffee" , 
                    email : "Coffee@example.com"  })
          }else {
               reject('Error : something went wrong')
          }
     },1000)
})

promiseThree
.then((user) =>{
     console.log(user);
     return user.username
}).then((username)=>{
     console.log(username);
}).catch(function(error){
     console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected")
)

*/

//With async await
/*
const promiseFour = new Promise(function(resolve,reject){
     setTimeout(function(){
          let error = true

          if(!error){
               resolve({username:"Javascript" , password:"123"})
          }else{
               reject('Error : js went wrong')
          }
     },1000)
})

async function consumePromiseFour() {
     
     try {
          const response = await promiseFour
          console.log(response);
     } catch (error) {
          console.log(error);
     }
     
}

consumePromiseFour()
*/


async function getAllUser() {
     try {
          const response = await fetch('https://json-ld.org/contexts/person.jsonld')
          const data = await response.json()
          console.log(data);
     } catch (error) {
          console.log(error);
     }
}

getAllUser()



//fetch json data
/*

fetch('https://json-ld.org/contexts/person.jsonld')
.then((response) => {
     return response.json()
})
.then((data) => {
     console.log(data);
})
.catch((error) => console.log(error)
)
*/
