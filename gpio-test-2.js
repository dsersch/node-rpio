var rpio = require('rpio')

rpio.open(29, rpio.OUTPUT, rpio.LOW)

rpio.write(29, rpio.HIGH)
rpio.sleep(500)

rpio.write(29, rpio.LOW)