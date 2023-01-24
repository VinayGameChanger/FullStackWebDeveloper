//element.insertAdjacentHTML(where,HTML)
//beforebegin
//afterbegin
//beforeend
//afterend

const todo=document.querySelector(".todo-list");
todo.insertAdjacentHTML("beforeend","<li>Teach Student<li>")//append
todo.insertAdjacentHTML("afterbegin","<li>Teach Student<li>")//prepend
todo.insertAdjacentHTML("beforebegin","<li>Teach Student<li>")//before
todo.insertAdjacentHTML("afterend","<li>Teach Student<li>")//after