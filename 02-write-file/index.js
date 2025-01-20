const process = require('node:process');
const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the Write File programm!');

let str = '';
rl.on('line', (data) => {
  if (data === 'exit') {
    console.log('Goodbye');
    rl.close();
    return;
  }
  str += data + '\n';

  fs.writeFile(path.join(__dirname, 'output.txt'), str, (err) => {
    if (err) return console.error(err.message);
  });
});
