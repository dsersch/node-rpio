const 
    express = require('express'),
    app = express(),
    Gpio = require('onoff').Gpio,
    relay1 = new Gpio(5, 'out'),
    relay2 = new Gpio(6, 'out'),
    relay3 = new Gpio(13, 'out'),
    relay4 = new Gpio(19, 'out'),
    relay5 = new Gpio(26, 'out'),
    relay6 = new Gpio(16, 'out'),
    relay7 = new Gpio(20, 'out'),
    relay8 = new Gpio(21, 'out'),
    PORT = 3001

const relays = [relay1, relay2, relay3, relay4, relay5, relay6, relay7, relay8]

app.get('/', (req, res) => {
    res.sendFile('controls.html', {root:__dirname})
})

relay1.writeSync(1)

app.get('/on/:id', (req, res) => {
    if (relays[req.params.id].readSync() === 1) {
        relays[req.params.id].writeSync(0)
        res.json({message: `relay #${req.params.id} is on...`})
    } else {
        res.json({message: 'relay is already on...'})
    }
})

app.get('/off/:id', (req, res) => {
    if (relays[req.params.id].readSync() === 0) {
        relays[req.params.id].writeSync(1)
        res.json({message: `relay #${req.params.id} is off...`})
    } else {
        res.json({message: 'relay is already off...'})
    }
})

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})