//selectors
let text = document.getElementById("text")
let addbtn = document.getElementById("Add")
let todo = document.querySelector(".todo")
let remove = document.getElementById("remove")
let removeAll = document.getElementById("remove-all")



//constants
const addItem = ()=>{
    let li = document.createElement("li")
    let listtext = document.createTextNode(text.value)
    li.appendChild(listtext)
    let button = document.createElement("button")
    let buttontext = document.createTextNode("Delete")
    button.appendChild(buttontext) 
    li.appendChild(button)
    button.classList.add("del")
    console.log(li)
    todo.appendChild(li)
    li.classList.add("list-item")
    text.value = ""
    button.addEventListener("click", function(){
        this.parentNode.remove();
    })
}

// 
const removelast = ()=>{
    let last = todo.lastElementChild
    todo.removeChild(last)
}
const addItemClick = ()=>{
    if(text.value.length>0) addItem()
}
const addItemKey = (e=>{
    if (e.keyCode===13&&text.value.length>0) addItem()
})

// event listeners
text.addEventListener("keydown", addItemKey)
addbtn.addEventListener("click", addItemClick)
remove.addEventListener("click", removelast)
removeAll.addEventListener("click", function(){
    todo.innerHTML = ""
})