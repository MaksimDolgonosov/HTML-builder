const fs = require('fs/promises');
const { mkdir } = require('fs/promises');
const path = require('path');

mkdir(path.join(__dirname, 'files-copy'), { recursive: true, })

fs.readdir(path.join(__dirname, '/files-copy'), { encoding: 'utf8', withFileTypes: true }, (err, files) => {
  if (err) throw err;
})
  .then(files => {
    files.forEach(file => {
      fs.unlink(path.join(__dirname, '/files-copy/', file.name))
    })
  });


fs.readdir(path.join(__dirname, '/files'), { encoding: 'utf8', withFileTypes: true }, (err, files) => {
  if (err) throw err;
})
  .then(files => {
    files.forEach(file => {
      fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name));
    })
  });
