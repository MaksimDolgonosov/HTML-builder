const fs = require('fs');
const fsPromise = require('fs/promises');
const path = require('path');
const { mkdir } = require('fs/promises');

mkdir(path.join(__dirname, 'project-dist'), { recursive: true, });

let template = "";
let text = "";

fs.readFile(path.join(__dirname, "template.html"), "utf-8", (err, data) => {
  if (err) throw err;
  template = data;
  fs.readdir(path.join(__dirname, '/components'), { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      if (file.isFile() && path.extname(file.name) == ".html") {
        fs.readFile(path.join(__dirname, '/components', file.name), "utf-8", (err, data) => {
          let regexp = new RegExp(`{{${path.basename(file.name, path.extname(file.name))}}}`, "g");
          template = template.replace(regexp, data);
          fs.writeFile(path.join(__dirname, 'project-dist', "index.html"), template, (error) => {
            error ? console.log(error) : null;
          })
        })
      }

    })
  })
})
fs.readdir(path.join(__dirname, '/styles'), { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (file.isFile() && path.extname(file.name) == ".css") {
      fs.readFile(path.join(__dirname, '/styles', file.name), "utf-8", (err, data) => {
        text = text + data;
        fs.writeFile(path.join(__dirname, '/project-dist', "style.css"), text, error => {
          if (error) throw error;
        })
      })
    }
  })
})
//Работаем с папкой assets
mkdir(path.join(__dirname, "project-dist", 'assets'), { recursive: true, })

fsPromise.readdir(path.join(__dirname, "project-dist", '/assets'), { encoding: 'utf8', withFileTypes: true }, (err, files) => {
  if (err) throw err;
})
  .then(files => {
    console.log(files);
    files.forEach(file => {
      console.log(file);
      if (file.isFile()) {
        fs.unlink(path.join(__dirname, "project-dist", '/assets/', file.name))
      } else {
        fsPromise.rmdir(path.join(__dirname, "project-dist", '/assets/', file.name));
      }

    })
  });
  


// fsPromise.readdir(path.join(__dirname, '/files'), { encoding: 'utf8', withFileTypes: true }, (err, files) => {
//   if (err) throw err;
// })
//   .then(files => {
//     files.forEach(file => {
//       fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name));
//     })
//   });

