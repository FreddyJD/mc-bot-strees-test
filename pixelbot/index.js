var fs = require('fs');
const exec = require('await-exec')
var data = fs.readFileSync('./Nicks.txt', 'utf8');
dataData = data.split('\n');

Promise.all(
  dataData.map((i) => {
      await exec(`node bot.js ${i}`);
  })
)
