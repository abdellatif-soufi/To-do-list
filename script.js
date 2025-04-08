let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  if (taskInput.value.length > 0) {

    let li = document.createElement("li");
    let taskText = document.createElement("span");
    let divbutton = document.createElement("div");
    let btnDone = document.createElement("button");
    let btnDelete = document.createElement("button");

    taskText.textContent = taskInput.value;
    taskInput.value = "";

    li.append(taskText);
    taskList.append(li);

    btnDone.textContent = 'Done';
    btnDone.style.backgroundColor = 'green';
    divbutton.append(btnDone);

    btnDelete.textContent = 'Delete';
    divbutton.append(btnDelete);

    li.append(divbutton);

    btnDone.addEventListener("click", function () {
      taskText.style.textDecoration = "line-through";
      li.style.color = "gray";
      li.style.backgroundColor = "#e0ffe0";
    });

    btnDelete.addEventListener("click", function () {
      li.remove();
    });
  } else {
    alert("Please type task....");
  }
});
