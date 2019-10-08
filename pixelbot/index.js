var fs = require('fs');
const { exec } = require('child_process');
var data = fs.readFileSync('./Nicks.txt', 'utf8');
dataData = data.split('\n');


dataData.map((i) => {
    return exec(`node bot.js ${i}`, (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      } else {
       console.log(`stdout: ${stdout}`);
       console.log(`stderr: ${stderr}`);
      }
    });
})
