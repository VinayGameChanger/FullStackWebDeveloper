//clone nodes

const ul = document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="New Content"
const li2 = li.cloneNode(true); //for deep cloning use true so child also clones

//we cannot append as well as prepend thats why we have to use clone
ul.append(li)
ul.prepend(li2)