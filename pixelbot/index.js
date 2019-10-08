var fs = require('fs');

const { exec } = require('child_process');

var data = fs.readFileSync('./Nicks.txt', 'utf8');
dataData = data.split('\n');

dataData.map((i) => {
  exec(`node bot.js ${i}`);
})

