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

module.exports = {
  mainNavigation,
};
