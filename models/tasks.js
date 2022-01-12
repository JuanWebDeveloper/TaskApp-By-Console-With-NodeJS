const moment = require('moment');
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

  // Method to load the tasks from the database
  loadTasksFromDB(tasks) {
    tasks.forEach((task) => {
      this.taskList[task.id] = task;
    });
  }

  // Method to list the tasks
  listTasks() {
    this.convertListToArray.forEach((task, index) => {
      const { taskDescription, createdAt, taskCompleted, completedAt } = task;
      const listPosition = `${index + 1}.`.cyan;
      const taskStatus = taskCompleted ? 'Completed'.green : 'Pending'.red;
      const taskDate = taskCompleted ? 'CompletedAt = ' + `${completedAt}`.cyan : 'CreatedAt = ' + `${createdAt}`.cyan;

      console.log(`${listPosition} ${taskDescription} ${'-'.cyan} ${taskStatus} ${'-'.cyan} ${taskDate}`);
    });
  }

  // Method to change the status of tasks in the database
  changeTasksStatusInDB(tasksIds) {
    tasksIds.forEach((taskId) => {
      const task = this.taskList[taskId];

      if (!task.taskCompleted) {
        task.taskCompleted = true;
        task.completedAt = `${moment(new Date().toISOString()).format('MMMM Do YYYY, h:mm:ss a')}`;
      }
    });

    this.convertListToArray.forEach((task) => {
      if (!tasksIds.includes(task.id)) {
        this.taskList[task.id].taskCompleted = false;
        this.taskList[task.id].completedAt = null;
      }
    });
  }
}

module.exports = Tasks;
