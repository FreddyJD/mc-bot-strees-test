var mineflayer = require('mineflayer');
var AutoAuth = require('mineflayer-auto-auth');
if (process.argv.length < 3 || process.argv.length > 5) {
  console.log('Usage : node multiple.js <host> <port>')
  process.exit(1)
}

let i = 0
function next () {
  if (i < process.argv[4]) {
    i++
    setTimeout(() => {
      createBot(`pixelbox-bot${i}`)
      next()
    }, 50)
  }
}
next()

function createBot (name) {
  mineflayer.createBot({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: name,
    plugins: [ AutoAuth ],
    AutoAuth: 'password',
    version: "1.8"
  })
}