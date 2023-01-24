//some old methods to support poor Internet Explorer
//appendChild;
//insertBefore;
//replaceChild;
//removeChild;

//apppend for IE
const ul = document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="New Content for IE"
const referenceNode=document.querySelector(".reference")
console.log(referenceNode);
// ul.appendChild(li)

//insertBefore;
// ul.insertBefore(li,referenceNode)

//replaceChild;

// ul.replaceChild(li,referenceNode);


//removeChild;
ul.removeChild(referenceNode)