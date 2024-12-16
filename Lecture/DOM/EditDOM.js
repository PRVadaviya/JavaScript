
function addLanguage(langName){

     const li = document.createElement('li')
     li.innerHTML = `${langName}`
     document.querySelector('.language').appendChild(li)

}

//addLanguage("python")
//addLanguage("ruby");


function addoptiLanguage(langName){

     const li = document.createElement('li')
     li.appendChild(document.createTextNode(langName))
     document.querySelector('.language').appendChild(li)
}

addoptiLanguage("java")
addoptiLanguage("ruby")

//EDIT
/*
const secondLang= document.querySelector("li:nth-child(2)")
//secondLang.innerHTML = "MoJo"
const newli = document.createElement('li')
newli.textContent = "MoJo"
secondLang.replaceWith(newli)      //java replace with mojo
*/
//EDIT

const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>TypeScript</li>' 

//REMOVE

const lastlang = document.querySelector('li:last-child')
lastlang.remove()





