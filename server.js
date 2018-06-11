const 
    express = require('express'),
    app = express(),
    rpio = require('rpio'),
    PORT = 3001

app.get('/', (req, res) => {
    res.sendFile('controls.html', {root:__dirname})
})

app.get('/on/:id', (req, res) => {
    res.json({message: `You want to turn relay ${req.params.id} on...`})
})

app.get('/off/:id', (req, res) => {
    res.json({message: `You want to turn relay ${req.params.id} off...`})
})

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})