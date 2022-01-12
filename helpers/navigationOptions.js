// Options of the main navigation
const optMainNavigation = [
  {
    type: 'list',
    name: 'optionSelected',
    message: 'What do you want to do?',
    choices: [
      {
        name: `${'1'.cyan} Add a new task`,
        value: 'addTask',
      },
      {
        name: `${'2'.cyan} List all tasks`,
        value: 'listTasks',
      },
      {
        name: `${'3'.cyan} Change the status of tasks`,
        value: 'changeTasksStatus',
      },
      {
        name: `${'4'.cyan} list completed tasks`,
        value: 'listCompletedTasks',
      },
      {
        name: `${'5'.cyan} list incompleted tasks`,
        value: 'listIncompletedTasks',
      },
      {
        name: `${'6'.cyan} Update a task`,
        value: 'updateTask',
      },
      {
        name: `${'7'.cyan} Delete a task`,
        value: 'deleteTask',
      },
      {
        name: `${'8'.cyan} Exit to task app`,
        value: 'exit',
      },
    ],
  },
];

// Options to change the status of tasks
const optChangeTasksStatus = [
  {
    type: 'checkbox',
    name: 'tasksIds',
    message: 'Select the tasks to change the status',
    choices: [],
  },
];

// Options to update a task
const optUpdateTask = [
  {
    type: 'list',
    name: 'taskToUpdate',
    message: 'Select the task to update',
    choices: [],
  },
];

module.exports = {
  optMainNavigation,
  optChangeTasksStatus,
  optUpdateTask,
};
