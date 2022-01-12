const Tasks = require('./models/tasks');
const { mainNavigation, stopExecution, readDataInput } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/handleDB');

const main = async () => {
  const tasks = new Tasks();
  const tasksInDB = readDB();

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
        console.log(tasks.convertListToArray);
        break;
    }

    // Save the tasks in the database
    saveDB(tasks.convertListToArray);

    // Stops execution when an option is selected
    optionSelected !== 'exit' && (await stopExecution());
  } while (optionSelected !== 'exit');
};

main();
