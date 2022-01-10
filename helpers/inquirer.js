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

module.exports = {
  mainNavigation,
  stopExecution,
};
