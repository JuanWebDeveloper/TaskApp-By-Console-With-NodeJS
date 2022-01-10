// Packages imports
const colors = require('colors');
const inquirer = require('inquirer');

// Options of the navigations
const { optMainNavigation } = require('./navigationOptions');

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

module.exports = {
  mainNavigation,
  stopExecution,
  readDataInput,
};
