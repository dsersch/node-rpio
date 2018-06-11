const 
    express = require('express'),
    app = express(),
    rpio = require('rpio'),
    PORT = 3001

app.get('/', (req, res) => {
    res.sendFile('controls.html', {root:__dirname})
})

app.get('/on/:id', (req, res) => {

    rpio.open(2, rpio.OUTPUT, rpio.LOW)

    for (let i = 0; i < 5; i++) {
        rpio.write(2, rpio.HIGH);
        rpio.sleep(500);

        rpio.write(2, rpio.LOW)
        rpio.sleep(500)
    }

    res.json({message: `You want to turn relay ${req.params.id} on...`})
})

app.get('/off/:id', (req, res) => {
    res.json({message: `You want to turn relay ${req.params.id} off...`})
})

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})