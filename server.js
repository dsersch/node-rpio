const 
    express = require('express'),
    app = express(),
    Gpio = require('onoff').Gpio,
    relay1 = new Gpio(5, 'out')
    PORT = 3001

app.get('/', (req, res) => {
    res.sendFile('controls.html', {root:__dirname})
})

relay1.writeSync(0);

app.get('/on/:id', (req, res) => {
    if (relay1.readSync() === 0) {
        relay1.writeSync(1)
        res.json({message: 'relay 1 is on...'})
    } else {
        res.json({message: 'relay is already on...'})
    }
})

app.get('/off/:id', (req, res) => {
    if (relay1.readSync() === 1) {
        relay1.writeSync(0)
        res.json({message: 'relay 1 is off...'})
    } else {
        res.json({message: 'relay is already off...'})
    }
})

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})