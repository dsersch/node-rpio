const 
    express = require('express'),
    app = express(),
    rpio = require('rpio'),
    PORT = 3001

app.get('/', (req, res) => {
    res.sendFile('controls.html', {root:__dirname})
})

app.get('/on', (req, res) => {
    res.json({message: `You want to turn a relay on...`})
})

app.get('/off', (req, res) => {
    res.json({message: `You want to turn a relay off...`})
})

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})