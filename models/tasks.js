const Task = require('./task');

class Tasks {
  constructor() {
    this.taskList = {};
  }

  // Method to create a task and add to the task list
  createTask(taskDescription) {
    const task = new Task(taskDescription);

    this.taskList[task.id] = task;
  }
}

module.exports = Tasks;
