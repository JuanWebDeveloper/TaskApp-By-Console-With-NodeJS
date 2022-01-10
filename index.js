const { mainNavigation } = require('./helpers/inquirer');

const main = async () => {
  let optionSelected = null;

  optionSelected = await mainNavigation();
  console.log(optionSelected);
};

main();
