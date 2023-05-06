const fs = require('fs');
const path = require('path');
console.log(path.join(__dirname, '/styles'))
let text = "";

fs.readdir(path.join(__dirname, '/styles'), { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (file.isFile() && path.extname(file.name) == ".css") {
      fs.readFile(path.join(__dirname, '/styles', file.name), "utf-8", (err, data) => {
        text = text + data;
        fs.writeFile(path.join(__dirname, '/project-dist', "bundle.css"), text, error => {
          if (error) throw error;
        })
      })
    }
  })
})

