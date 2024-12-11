// array to keep track of the tasks id and a task counter
let tasks=[];
let taskCounter = 0;

// create a function that assigns an id to a task and add it to an array and increments the counter 
function addTaskId(){
    tasks.push(taskCounter);
    return taskCounter++;
}




// make a function called "addTask" that takes user input from a text field and adds it to the DOM with 2 buttons
function addTask(){
    let currentTask = document.getElementById("newTask");

    let newTask = {
        value : currentTask.value,
        id : addTaskId()
    }
    // make a new div that contains the new task
    let taskDiv = document.createElement("div");
    taskDiv.id = `task-${newTask.id}`; 

    // make a field that stores the task
    let taskField = document.createElement("input");
    taskField.type = "text";
    taskField.value = newTask.value;
    taskField.readOnly = true; // Make it non-editable
    taskField.className = "task-input"; 

    // make a "done button that doesn't delete the task but rather change the styling by toggle"
    let doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.style.backgroundColor = "blue";
    doneButton.onclick = ()=>{
        if (taskField.style.textDecoration === "line-through") {
            taskField.style.textDecoration = "none"; 
            doneButton.style.backgroundColor = "blue";
            taskField.style.backgroundColor = "white"
        } else {
            taskField.style.textDecoration = "line-through";
            doneButton.style.backgroundColor = "green" 
            taskField.style.backgroundColor = "greenyellow"
        }
    }
   

    // Create the Delete button that removes the "entire taskDiv"
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red"
    deleteButton.onclick = function () {
        taskDiv.remove(); 
    };

    // add all three element to the div
    taskDiv.appendChild(taskField);
    taskDiv.appendChild(doneButton);
    taskDiv.appendChild(deleteButton);

    // add the div to the dom
    let taskContainer = document.getElementById("taskContainer");
    taskContainer.appendChild(taskDiv);

    // clear the value of the main input field 
    currentTask.value = "";
}

