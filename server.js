const 
    express = require('express'),
    app = express(),
    rpio = require('rpio'),
    PORT = 3001

app.get('/', (req, res) => {
    res.sendFile('controls.html', {root:__dirname})
})

app.get('/on/:relay-number', (req, res) => {
    res.json({message: `You want to turn relay ${req.params.relay-number} on`})
})

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})