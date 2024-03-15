const prompts = require('prompts');

const questions = [
  {
    type: 'multiselect',
    name: 'value',
    message: 'Pick colors',
    choices: [
      { title: 'Red', value: '#ff0000' },
      { title: 'Green', value: '#00ff00', disabled: true },
      { title: 'Blue', value: '#0000ff', selected: true }
    ],
    max: 2,
    hint: '- Space to select. Return to submit'
  }
];

(async () => {
  const response = await prompts(questions);
  
  // Check if "Red" option is selected
  if (response.value.includes('#ff0000')) {
    console.log('red');
  } else {
    console.log('No color selected or color other than red chosen.');
  }
})();
