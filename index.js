import prompts from 'prompts';
import chalk from 'chalk';
import fs from 'fs';
import figlet from 'figlet';
figlet.text(
  "Get marches!",
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
 console.log("---------------------------------");
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
      { title: 'Pyotr', value: 'ru', selected: true },
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
    console.log(chalk.blue('--------`--------------------'));
    fs.readFile('./s-list/desongs.md', 'utf8', function(err, data) {
      if (err) throw err;
        console.log(data);
      }
      );}

       if (response.value.includes('ru')) {
    console.log(chalk.blue('Here are some russian marches'));
    console.log(chalk.blue('--------`--------------------'));
    fs.readFile('./s-list/rusongs.md', 'utf8', function(err, data) {
      if (err) throw err;
        console.log(data);
      }
      );}
    
     if (response.value.includes('eng')) {
    console.log(chalk.blue('Here are some english marches'));
    console.log(chalk.blue('----------------------------'));
    fs.readFile('./s-list/ensongs.md', 'utf8', function(err, data) {
      if (err) throw err;
        console.log(data);
      }


      );}
    })();


