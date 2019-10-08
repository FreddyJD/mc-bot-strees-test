var mineflayer = require('mineflayer');
var AutoAuth = require('mineflayer-auto-auth');


mineflayer.createBot({
    username: process.argv[2],
    host: 'mc.pixelbox.us',
    port: 25565,
    plugins: [ AutoAuth ],
    AutoAuth: 'password',
    version: "1.8"
})