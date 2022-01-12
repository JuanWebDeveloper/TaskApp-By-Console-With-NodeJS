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
      const creationDateFormatted = `${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}`.cyan;
      const completionDateFormatted = taskCompleted && `${moment(completedAt).format('MMMM Do YYYY, h:mm:ss a')}`.cyan;
      const listPosition = `${index + 1}.`.cyan;
      const taskStatus = taskCompleted ? 'Completed'.green : 'Pending'.red;
      const taskDate = taskCompleted ? `CompletedAt = ${completionDateFormatted}` : `CreatedAt = ${creationDateFormatted}`;

      console.log(`${listPosition} ${taskDescription} ${'-'.cyan} ${taskStatus} ${'-'.cyan} ${taskDate}`);
    });
  }
}

module.exports = Tasks;
