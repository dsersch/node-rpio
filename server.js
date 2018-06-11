const 
    express = require('express'),
    app = express(),
    rpio = require('rpio'),
    PORT = 3001

app.get('/', (req, res) => {
    res.send("it's working....")
})

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})