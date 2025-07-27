let tasks = [];

function addTask() {
  const inputName = document.querySelector("#taskName").value;
  const inputType = document.querySelector(
    'input[name="taskType"]:checked'
  ).value;

  const newTask = {
    taskName: inputName,
    taskType: inputType,
    dateAdded: new Date(),
  };

  tasks.push(newTask);

  // result in console
  console.log("task is added");
  console.log("array of tasks", tasks);

  // result in alert
  alert(`done at ${newTask.dateAdded}
task name :${newTask.taskName}, and his type ${newTask.taskType}`);

  // result in DOM
  let result = document.querySelector("#result");
  result.innerHTML = `done at ${newTask.dateAdded},
task name :${newTask.taskName}, and his type ${newTask.taskType}`;
}
