const Tasks = require('./models/tasks');
const {
  mainNavigation,
  stopExecution,
  readDataInput,
  navigationChangeStatus,
  navigationToUpdateAndDeleteTasks,
  confirmationMessage,
} = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/handleDB');

const main = async () => {
  const tasks = new Tasks();
  const tasksInDB = readDB();

  // Load tasks from DB
  tasksInDB.length > 0 && tasks.loadTasksFromDB(tasksInDB);

  let optionSelected = null;

  do {
    optionSelected = await mainNavigation();

    // Handle navigation options
    switch (optionSelected) {
      case 'addTask':
        console.log('\n');
        const taskDescription = await readDataInput('Enter the task description:');

        tasks.createTask(taskDescription);

        console.log('\n  Task created successfully!  '.white.bgGreen);
        break;

      case 'listTasks':
        console.log('\n');

        tasks.listTasks();
        break;

      case 'changeTasksStatus':
        console.log('\n');

        const tasksIds = await navigationChangeStatus(tasks.convertListToArray);

        tasks.changeTasksStatusInDB(tasksIds);

        console.log('\n  The status of the tasks was updated successfully!  '.white.bgGreen);
        break;

      case 'listCompletedTasks':
        console.log('\n');

        tasks.listTasksByStatus(true);
        break;

      case 'listIncompletedTasks':
        console.log('\n');

        tasks.listTasksByStatus(false);
        break;

      case 'updateTask':
        console.log('\n');

        const taskToUpdate = await navigationToUpdateAndDeleteTasks(tasks.convertListToArray, 'Select the task to update');
        const confirmationToUpdate = taskToUpdate !== 'goBack' && (await confirmationMessage('Are you sure you want to update this task?'));

        if (taskToUpdate !== 'goBack' && confirmationToUpdate) {
          const taskDescriptionUpdate = await readDataInput('Enter the new task description:');

          tasks.updateTaskInDB(taskToUpdate, taskDescriptionUpdate);

          console.log('\n  Task updated successfully!  '.white.bgGreen);
        } else {
          console.log('\n  No task was updated!  '.white.bgGreen);
        }
        break;

      case 'deleteTask':
        console.log('\n');

        const taskToDelete = await navigationToUpdateAndDeleteTasks(tasks.convertListToArray, 'Select the task to delete');
        const confirmationToDelete = taskToDelete !== 'goBack' && (await confirmationMessage('Are you sure you want to delete this task?'));

        if (taskToDelete !== 'goBack' && confirmationToDelete) {
          tasks.deleteTaskInDB(taskToDelete);

          console.log('\n  Task deleted successfully!  '.white.bgGreen);
        } else {
          console.log('\n  No task was deleted!  '.white.bgGreen);
        }

        break;
    }

    // Save the tasks in the database
    saveDB(tasks.convertListToArray);

    // Stops execution when an option is selected
    optionSelected !== 'exit' && (await stopExecution());
  } while (optionSelected !== 'exit');
};

main();
