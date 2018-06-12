var rpio = require('rpio')

rpio.open(5, rpio.OUTPUT, rpio.LOW)

for (var i = 0; i < 5; i++) {
    rpio.write(5, rpio.HIGH)
    rpio.sleep(500)

    rpio.write(5, rpio.LOW)
    rpio.sleep(500)
}