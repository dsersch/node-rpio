const 
    express = require('express'),
    app = express(),
    rpio = require('rpio'),
    PORT = 3001



app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`)
})