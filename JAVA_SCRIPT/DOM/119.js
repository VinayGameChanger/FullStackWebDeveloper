//how to get dimensions of an element

const sectionTodo=document.querySelector(".section-todo");

const info=sectionTodo.getBoundingClientRect()
console.log(info);
//to get height
console.log(info.height);