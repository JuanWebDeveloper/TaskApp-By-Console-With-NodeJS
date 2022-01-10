const { mainNavigation } = require('./helpers/inquirer');

const main = async () => {
  let optionSelected = null;

  do {
    optionSelected = await mainNavigation();
  } while (optionSelected !== 'exit');
};

main();
