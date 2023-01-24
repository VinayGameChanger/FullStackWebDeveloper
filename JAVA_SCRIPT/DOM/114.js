//document.createElement()
// append
// prepend
// remove


// const newTodoItem=document.createElement("li");
// newTodoItem.textContent="added using createElement";


// const todo=document.querySelector(".todo-list");
// todo.append(newTodoItem)//it add element at the end
// todo.prepend(newTodoItem)//it add element at the start

// const todo1=document.querySelector(".todo-list");
// todo1.remove()

//before
//after

const newTodoItem=document.createElement("li");
newTodoItem.textContent="added using createElement";
const todo=document.querySelector(".todo-list");
todo.before("newTodoItem");
todo.after("newTodoItem");
