const fs = require('fs');
const path = require('path');
const writeStream = fs.createWriteStream(path.join(__dirname, '/text.txt'))

const readline = require('readline');
const {
  stdin: input,
  stdout: output,
} = require('process');

const rl = readline.createInterface({ input, output });
console.log("Hi, please enter your text:");

rl.on('line', (input) => {
  if (input == "exit") {
    rl.close();
  } else {
    writeStream.write(input);
  }

});

rl.on("close",()=>{
  console.log("Thank you! Good bye!");
})