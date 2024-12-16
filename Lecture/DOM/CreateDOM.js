
const parent = document.querySelector('.parent')
//console.log(parent);                              //give all parent class data
//console.log(parent.children);                     //give only day class data
//console.log(parent.children[1].innerHTML);        //Tuesday

for(let i=0 ; i<parent.children.length ; i++){
    // console.log(parent.children[i].innerHTML);
     
}

parent.children[1].style.color = "blue"
//console.log(parent.firstElementChild);
//console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day')
//console.log(dayOne)
//console.log(dayOne.parentElement);
//console.log(dayOne.nextElementSibling);
//console.log("Nodes : " ,parent.childNodes);            //Dom tree element


// create DOM

const div = document.createElement('div')
console.log(div);

div.className = "main"
div.id = "Front"
div.setAttribute("title" , "generated title")
div.style.backgroundColor = "green"
div.style.padding = "16px"
//div.innerText = "Drink Water"
const addText = document.createTextNode("Drink Water")
div.appendChild(addText)

document.body.appendChild(div) ;




