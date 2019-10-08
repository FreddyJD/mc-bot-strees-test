const cluster = require('cluster');
const http = require('http');
var fs = require('fs');
const { exec } = require('child_process');


var data = fs.readFileSync('./Nicks.txt', 'utf8');
dataData = data.split('\n');
const numCPUs = dataData.length;
num = 0

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    num++
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  exec(`node bot.js ${dataData[num]}`);
}



