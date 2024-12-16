
function setUserName(username){

     this.username = username
     console.log("called");
}

function createUser(username , password){
//     setUserName(username)                        //check output Not reflect username
          setUserName.call(this,username)           //bcz of when function call it(function) delete all reference of this then how to we access
                                                  // call method is there,it hold reference of calling function
     this.password = password
}

const chai = new createUser("chai"  , "123")
console.log(chai)
