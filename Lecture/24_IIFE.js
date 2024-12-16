//immediately invoked function expressions(IIFE)
//it's problem of global scope pollution and IIFE remove that problem

//Named IIFE
(function chai(){
     console.log(`DB CONNECTED`);
})();     

//UnNamed IIFE
( (x) => {                                         //If above function not end with semicolom then give error 
     console.log(`DB CONNECTED ${x} `);
})(189)


