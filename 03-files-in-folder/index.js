const fs = require('fs');
const path = require('path');

// const content = fs.readdir('secret-folder');
// console.log(content);

fs.readdir(path.join(__dirname, '/secret-folder'), { encoding: 'utf8', withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(path.extname(file.name));
  })

});