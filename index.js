const Tasks = require('./models/tasks');
const { mainNavigation, stopExecution, readDataInput, navigationChangeStatus } = require('./helpers/inquirer');
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
        tasks.listTasks();
        break;

      case 'changeTasksStatus':
        const tasksIds = await navigationChangeStatus(tasks.convertListToArray);

        tasks.changeTasksStatusInDB(tasksIds);

        console.log('\n  The status of the tasks was updated successfully!  '.white.bgGreen);
        break;

      case 'listCompletedTasks':
        break;

      case 'listIncompletedTasks':
        break;
    }

    // Save the tasks in the database
    saveDB(tasks.convertListToArray);

    // Stops execution when an option is selected
    optionSelected !== 'exit' && (await stopExecution());
  } while (optionSelected !== 'exit');
};

main();
