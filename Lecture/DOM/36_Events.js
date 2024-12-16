// Events run in sequence 

// document.getElementById('click').onclick = function()
// {
//      alert("Clicked")
// }

//


// document.getElementById('click').addEventListener('click' , function(e){
//      //alert("Clicked")
//      console.log(e);
     
//      //Interview question
//      //type , timestamp , defaultPrevented , target , sourceElement , currentTarget
//      //clientX , clientY , screenX , screenY
//      //altkey , ctrlKey , Shiftkey , keyCode
// },false)


document.getElementById('click1').addEventListener('click' , function(e){

           alert("click on button")
           e.stopPropagation()
} , false)

document.getElementById('dashboard').addEventListener('click' , function(e){
     
          alert("click on Page")
} , false)

// if third parameter is false (default) , in Bubbling mode take bottom to top.
                                        // means first alert come for element and after UI
                                        // , in capturing mode take top to bottom
//                       true              means first alert come for UI and after element

