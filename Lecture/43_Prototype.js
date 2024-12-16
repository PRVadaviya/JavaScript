
// create own prototype like {make}
/*
let myHeros = ["thor" , "spiderman"]

let heroPower = {
     thor : "Hammer",
     spiderman : "sling",

     getSpiderPoewer : function(){
          console.log(`spidy power ${this.spiderman}`);
          
     }
}

// we create prototype for Object class means apply for object , array , function and many more

Object.prototype.make = function(){
     console.log(`Make payment !!!`);
}

heroPower.make()
myHeros.make()
*/

// inheritance

const Teacher = {
     makeVideo : true 
}

const Student = {
     isAvailable : false 
}

// classroom can access both object using __proto__

const Classroom = {
     isCctv : true,
     __proto__ : Teacher,
     __proto__ : Student
}

// Second Method
Object.setPrototypeOf(Classroom,Student)
