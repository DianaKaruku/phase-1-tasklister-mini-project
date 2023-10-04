document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let createTaskForm = document.getElementById("create-task-form");
  let newTaskDescription = document.getElementById("new-task-description");
  let taskList = document.getElementById("tasks");

  createTaskForm.addEventListener("submit",function(e){
    e.preventDefault();

    let taskDescription = newTaskDescription.value;

let listItem =document.createElement("li");
listItem.textContent = taskDescription;

taskList.appendChild(listItem);

newTaskDescription.value = "";
  });
});
