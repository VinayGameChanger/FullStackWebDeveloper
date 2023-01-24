//static list vs live list

// querySelectorAll give static list while getElementbysomething give live list

//static list
// const listItems=document.querySelectorAll(".todo-list li")
// const sixthli=document.createElement("li")
// sixthli.textContent="item6"
// const ul=document.querySelector(".todo-list");
// ul.append(sixthli)
// console.log(listItems); //static node list


// livelist


const ul=document.querySelector(".todo-list");
const listItems=ul.getElementsByTagName("li")
const sixthli=document.createElement("li")
sixthli.textContent="item6"
ul.append(sixthli)
console.log(listItems); //live node list