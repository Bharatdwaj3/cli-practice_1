import boxen from 'boxen';
import fs from 'fs';
//boxen(fs.readFile('./songs.md', 'utf8', function(err, data) 
//console.log(boxen('unicorn',{padding: 1, margin: 1, borderStyle: 'double'}))
console.log(boxen(fs.readFile('./songs.md', 'utf8', function(err, data),) {
  if (err) throw err;
  console.log(data);
}));