const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, '/secret-folder'), { encoding: 'utf8', withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    fs.stat(path.join(__dirname, '/secret-folder', file.name), (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        console.log(`${path.basename(file.name, path.extname(file.name))} - ${path.extname(file.name).replace(/./,"")} - ${(stats.size/1024).toFixed(4)}kb`)
      }

    })

  })

});

