const Task = require('./task');

class Tasks {
  constructor() {
    this.taskList = {};
  }

  // Converts the task list object to an array
  get convertListToArray() {
    const taskListArray = [];

    Object.keys(this.taskList).forEach((taskId) => {
      taskListArray.push(this.taskList[taskId]);
    });

    return taskListArray;
  }

  // Method to create a task and add to the task list
  createTask(taskDescription) {
    const task = new Task(taskDescription);

    this.taskList[task.id] = task;
  }
}

module.exports = Tasks;
