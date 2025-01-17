const fs = require('node:fs');
const path = require('node:path');
const { stdout } = require('node:process');

fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  stdout.write(data);
});
