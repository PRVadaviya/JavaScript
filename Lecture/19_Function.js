
//basic
/*
function addTwoNumber(number1 , number2){

     flag =number1 + number2;
    // console.log(flag);
     return flag ;
}

const result = addTwoNumber(3,5);
console.log("Result :  " , result);          //print undefined if function not return anythings 
*/

/*

function loginUserMessage(userName = "Sam"){           //take default value if argument not pass

     if (!userName) {         //(userName === undefined)    undefined treated as a false
          console.log("Please Enter a userName");
          return 
     }

     return `${userName} just Logged In`
}

console.log(loginUserMessage());
console.log(loginUserMessage("John"));

*/

/*
//Rest And Spread Operator

//function calculateCartPrice(val1 , val2 , ...num){}       //200 and 400 goes into val1 and val2

function calculateCartPrice(...num){              //... called as rest Operator || It's packed all value in one packet,bundle
     return num
}

console.log(calculateCartPrice(200,400,600));
*/

//Pass Objects
function handleObject(anythings){

     console.log(`UserName is ${anythings.userName} and price id ${anythings.price}`);
}

handleObject({
     
     userName : "John" ,
     price : 189
})

