// Packages imports
const colors = require('colors');
const inquirer = require('inquirer');

// Options of the navigations
const { optMainNavigation, optChangeTasksStatus, optUpdateTask } = require('./navigationOptions');

// Main navigation
const mainNavigation = async () => {
  console.clear();
  console.log('============'.cyan);
  console.log('  Task App  '.white.bgCyan);
  console.log('============'.cyan);

  const { optionSelected } = await inquirer.prompt(optMainNavigation);

  // User selected option
  return optionSelected;
};

// Stop program execution
const stopExecution = async () => {
  const config = [
    {
      type: 'input',
      name: 'stop',
      message: `Press ${'enter'.cyan} to continue...`,
    },
  ];

  console.log('\n');
  await inquirer.prompt(config);
};

// Read user data
const readDataInput = async (message) => {
  const config = [
    {
      type: 'input',
      name: 'dataInput',
      message,
      validate(value) {
        // Validates user input
        if (value.length >= 1) return true;

        return '  Please enter a value  '.white.bgRed;
      },
    },
  ];

  const { dataInput } = await inquirer.prompt(config);

  // Information provided by the user
  return dataInput;
};

// Navigation of change the status of tasks
const navigationChangeStatus = async (tasks) => {
  const choices = tasks.map((task, index) => {
    const listPosition = `${index + 1}.`.cyan;
    const { taskDescription, createdAt, taskCompleted, completedAt } = task;
    const taskStatus = taskCompleted ? 'Completed'.green : 'Pending'.red;
    const taskDate = taskCompleted ? 'CompletedAt = ' + `${completedAt}`.cyan : 'CreatedAt = ' + `${createdAt}`.cyan;

    return {
      name: `${listPosition} ${taskDescription} ${'-'.cyan} ${taskStatus} ${'-'.cyan} ${taskDate}`,
      value: task.id,
      checked: task.taskCompleted ? true : false,
    };
  });

  optChangeTasksStatus[0].choices = choices;
  const { tasksIds } = await inquirer.prompt(optChangeTasksStatus);

  return tasksIds;
};

// Navigation of update a task
const navigationUpdateTask = async (tasks) => {
  const choices = tasks.map((task, index) => {
    const listPosition = `${index + 1}.`.cyan;
    const { taskDescription, createdAt, taskCompleted, completedAt } = task;
    const taskStatus = taskCompleted ? 'Completed'.green : 'Pending'.red;
    const taskDate = taskCompleted ? 'CompletedAt = ' + `${completedAt}`.cyan : 'CreatedAt = ' + `${createdAt}`.cyan;

    return {
      name: `${listPosition} ${taskDescription} ${'-'.cyan} ${taskStatus} ${'-'.cyan} ${taskDate}`,
      value: task.id,
    };
  });

  optUpdateTask[0].choices = choices;
  const { taskToUpdate } = await inquirer.prompt(optUpdateTask);

  return taskToUpdate;
};

module.exports = {
  mainNavigation,
  stopExecution,
  readDataInput,
  navigationChangeStatus,
  navigationUpdateTask,
};
