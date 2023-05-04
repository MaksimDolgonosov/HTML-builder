const fs = require('fs');
const { readdir } = require('fs/promises');
const { mkdir } = require('fs/promises');
const { rmdir } = require('fs/promises');
const { copyFile } = require('fs/promises');
const path = require('path');

//mkdir(path.join(__dirname, 'files-copy'), { recursive: true, });

readdir(path.join(__dirname, '/files-copy'), (err, filess) => {
  if (err) {
    mkdir(path.join(__dirname, 'files-copy'), { recursive: true, });
  } else {
    rmdir(path.join(__dirname, 'files-copy'), err => {
      if (err) throw err;
    });

  }

})
readdir(path.join(__dirname, '/files'), { encoding: 'utf8', withFileTypes: true }, (err, files) => {
  if (err) throw err;



  // readdir(path.join(__dirname, '/files-copy'), (err,filess)=>{
  //   if (err) {
  //     mkdir(path.join(__dirname, 'files-copy'), { recursive: true, });
  //   } else {
  //     rmdir(path.join(__dirname, 'files-copy'), err => {
  //       if(err) throw err; 
  //    });

  //   }

  // })

  files.forEach(file => {
    copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
      if (err) throw err;
    })
  })

});