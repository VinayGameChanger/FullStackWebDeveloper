const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']")
const todoList=document.querySelector(".todo-list")

todoForm.addEventListener("submit",(e)=>{
    const newTodoText=todoInput.value;
    e.preventDefault();  //to stop from refreshing the page
    const newLi=document.createElement("li");
    const newLiInnerHTML=`<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
  newLi.innerHTML=newLiInnerHTML;
  todoList.append(newLi)
    todoInput.value="";
})

todoList.addEventListener("click",(e)=>{
    //check if user click on done button
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling
        liSpan.style.textDecoration="line-through"    }
    if(e.target.classList.contains("remove")){
        let liSpan=e.target.parentNode.parentNode
        liSpan.remove()
    }
})