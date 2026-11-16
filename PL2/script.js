let button = document.getElementById("button");
let messageInput = document.getElementById("messageInput");
let nameInput = document.getElementById("nameInput");
let colorSelect = document.getElementById("colorSelect");
let greeting = document.getElementById("greeting");
let message = document.getElementById("message");

function mainFunction() {
    let newNameInput = nameInput.value;
    if (newNameInput !=="") {
    greeting.textContent = "SHIP'S LOG: Commander " + newNameInput;
    }
    let newMessage = messageInput.value;
    if (newMessage !=="") {
    message.textContent = newMessage;
    }

    document.body.style.backgroundColor = colorSelect.value;
}

button.onclick = mainFunction;

let toDoButton = document.getElementById("todoButton");
let toDoList = document.getElementById("todoList");
let toDoListItems = document.getElementById("todoListItems"); 

function addTask() {
    let taskText = toDoList.value;
    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;
        toDoListItems.appendChild(li);
        toDoList.value = "";
    }
}

todoButton.onclick = addTask;
