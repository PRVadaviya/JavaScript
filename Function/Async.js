//sync --> one task complete after second task start (One By One)
//Async --> multi task start at one's time and  complete task with non order (different time)

/*
task1 = 3 
task2 = 7
task3 = 10 
task4 = 1 

sync time = 21 sec
Async time = 10 sec      (all task starting time same)
*/

/*
//callback function

console.log("hii1");

//run after 2 second
setTimeout(function(){
     console.log("hii2");               //It's called callback function
} , 2000);                    //2000 millisecond

console.log("hii3");

*/

/*
REMARK: 
          EVENTLOOP --> eventloop works on stack , those work done in side stack , 
                        that come in main stack and these work done by eventloop


                        javascript is not asyncronous and work based on single threaded
*/

/*
// check output
console.log("hii1");          //Main Stack
console.log("hii2");          //Main Stack
setTimeout(function(){
     console.log("hii3")      //Side Stack
} , 0)
console.log("hii4");          //Main Stack
*/

//promise      (response or reject)
/*
var ans = new Promise((res,rej)=>{

     if(4>9){
          return res();
     }
     else{
          return rej();
     }
})

ans
.then(function(){             //if promise is resolve to run then
     console.log("resolve")
})

.catch(function(){            // if promise is reject to run catch
     console.log("rejected")
})
*/

//promise chain
/*
var p1 = new Promise((res,rej)=>{

     return res("promise1 -> boil water")
})

var p2 = p1.then(function(pro1){
     console.log(pro1)
     return new Promise((res,rej)=>{                             //One promise return another promise
          return res("promise2 -> cut meggi packet");
     })
})

p2.then(function(pro2){
     console.log(pro2)
})

*/

//async and await