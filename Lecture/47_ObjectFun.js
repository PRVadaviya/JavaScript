// Math.Pi's value can change or not  || (Yes , code Below)

const chai = {
     name : 'ginger chai' ,
     price : 250 ,
     isAvailable : true,
     inProcess : function (){
          console.log("Making");
     }
}

//console.log(Object.getOwnPropertyDescriptor(chai , "name"));

// Object.defineProperty(chai , 'name' ,{
//      writable : false ,
//      enumerable : false 
// })

//console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai , 'name' , {
     //writable : false ,
     enumerable : true 
})

for(let [key , value] of Object.entries(chai)){
    
     if(typeof value !== 'function'){
          console.log(`${key} : ${value}`);
     }
}
