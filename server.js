const 
    express = require('express'),
    app = express(),
    rpio = require('rpio'),
    PORT = 3001

app.get('/', (req, res) => {
    res.sendFile('controls.html', {root:__dirname})
})

app.get('/:io', (req, res) => {
    res.json({message: `You want to turn a relay ${req.params.io}`})
})

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})