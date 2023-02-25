// let todo1='get groceries';
// let todo2='Wash Car';
// let todo3='Make dinner';



// let element= document.createElement('div');
// element.innerText=todo1;
// document.body.appendChild(element);


// element= document.createElement('div');
// element.innerText=todo2;
// document.body.appendChild(element);

// element= document.createElement('div');
// element.innerText=todo3;
// document.body.appendChild(element);

// function addTodo(todoTitle){
// let element= document.createElement('div');
// element.innerText=todoTitle;
// document.body.appendChild(element);
// }

// addTodo(todo1);
// addTodo(todo2);
// addTodo(todo3);
// addTodo('order food');


// 7

// when we create an array many function are predefined are comes with the array

let todos = [{
    id: 'id1',
    title: 'Get groceries',
    dueDate: '20-10-1995'
  },
  {
    id: 'id2',
    title: 'Wash car',
    dueDate: '05-04-1995'
  },
  {
    id: 'id3',
    title: 'Make dinner',
    dueDate: '10-06-1995'
  }
];

// delete function
function deleteTodo(event) {
  const deleteButton=event.target;
  const idToDelete=deleteButton.id;
}

function render() {
  //reset the list first
  document.querySelector('.todo-list').innerHTML = '';
  todos.forEach((todo) => {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left:20px';
    deleteButton.onclick = deleteTodo;
    deleteButton.id=todo.id; 
    element.appendChild(deleteButton);

    const todoList = document.querySelector('.todo-list');
    todoList.appendChild(element);
  })
}

render();


// onclick

function addTodo() {

  const textbox = document.querySelector('.todo-title');
  const title = textbox.value;

  const datePicker = document.querySelector('.date-picker');
  const dueDate = datePicker.value;

  // to create a unique id using time use new Date().getTime()
  const id= new Date().getTime();
  todos.push({
    id:id,
    title: title,
    dueDate: dueDate
  }) //to get value from the textbox
  render()
}