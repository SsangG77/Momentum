const TodoForm = document.getElementById("todo-form");
const TodoInput = TodoForm.querySelector("input");
const TodoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    TodoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = TodoInput.value;
    TodoInput.value = "";
    paintToDo(newTodo);
}


TodoForm.addEventListener("submit", handleToDoSubmit);