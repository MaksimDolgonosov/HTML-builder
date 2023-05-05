const fs = require('fs/promises');
const { readdir } = require('fs/promises');
const { mkdir } = require('fs/promises');
const { rmdir } = require('fs/promises');
// const copyFile = fs.copyFile;
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
      console.log(path.join(__dirname, 'files', file.name));
      fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
        if (err) throw err;
      })
    })
    // files.forEach(file => {
    //   copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
    //     if (err) throw err;
    //   })
    // });
  });



//   // readdir(path.join(__dirname, '/files-copy'), (err,filess)=>{
//   //   if (err) {
//   //     mkdir(path.join(__dirname, 'files-copy'), { recursive: true, });
//   //   } else {
//   //     rmdir(path.join(__dirname, 'files-copy'), err => {
//   //       if(err) throw err;
//   //    });

//   //   }

//   // })

//   files.forEach(file => {
//     copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
//       if (err) throw err;
//     })
//   })

// });