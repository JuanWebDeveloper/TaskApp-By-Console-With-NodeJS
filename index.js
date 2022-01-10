const { mainNavigation, stopExecution, readDataInput } = require('./helpers/inquirer');

const main = async () => {
  let optionSelected = null;

  do {
    optionSelected = await mainNavigation();

    switch (optionSelected) {
      case 'addTask':
        console.log('\n');
        const rest = await readDataInput('Enter the task description:');

        console.log(rest);
        break;
    }

    // Stops execution when an option is selected
    optionSelected !== 'exit' && (await stopExecution());
  } while (optionSelected !== 'exit');
};

main();
