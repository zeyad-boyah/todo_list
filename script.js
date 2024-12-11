// array to keep track of the tasks id and a task counter
let tasks=[];
let taskCounter = 0;



// make a function called "addTask" that takes user input from a text field and adds it to the DOM with 2 buttons
function addTask(){
    let currentTask = document.getElementById("newTask");
    console.log(currentTask.value);
    let newTask = {
        value : currentTask.value,
        id : addTaskId()
    }
    console.log(newTask);

    currentTask.value = "";
}


// create a function that assigns an id to a task and add it to an array and increments the counter 
function addTaskId(){
    tasks.push(taskCounter);
    return taskCounter++;
}