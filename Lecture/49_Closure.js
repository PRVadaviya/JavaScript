
//A closure gives you access to an outter function scope from an inner function at function creation time 
//lexical scoping
/*
function outter(){
     let username = "Coffee"

     function inner(){
          let secret = "my@123"
          console.log("inner" , username);
     }
     function innerTwo(){
          console.log("innerTwo" , username);
         // console.log(secret);                    // not access
     }
     inner()
     innerTwo()
}

outter()
//console.log("Too Outter" , username);
*/



