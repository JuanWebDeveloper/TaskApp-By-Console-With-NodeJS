const { mainNavigation, stopExecution } = require('./helpers/inquirer');

const main = async () => {
  let optionSelected = null;

  do {
    optionSelected = await mainNavigation();

    // Stops execution when an option is selected
    optionSelected !== 'exit' && (await stopExecution());
  } while (optionSelected !== 'exit');
};

main();
