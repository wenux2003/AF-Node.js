console.log("Hello testing 1 ...");

const fs = require('fs');

fs.writeFile('file.txt', 'Hello hello world!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});