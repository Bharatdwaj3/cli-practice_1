import prompts from 'prompts';
import chalk from 'chalk';
import fs from 'fs';
import figlet from 'figlet';
figlet.text(
  "Music Player!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

const questions = [
  {
    type: 'text',
    name: 'genre',
    message: 'What is your fav genre?'
  },
  {
    type: prev => prev == 'metal' ? 'multiselect' : null,
    name: 'value',
    message: 'Select an artist',
    choices: [
      { title: 'Pyotr', value: 'rus', selected: true },
      { title: 'Jamie', value: 'eng' },
      { title: 'Karl', value: 'de'}
    ],
    max: 1,
  }
];

(async () => {
  const response = await prompts(questions);
  if (response.value.includes('de')) {
    console.log(chalk.blue('Here are some german marches'));
    console.log(chalk.blue('----------------------------'));
fs.readFile('./songs.md', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

  } else {
    console.log(chalk.red('No artist selected or color other than red chosen.'));
  }
})();


