let a = 0
basic.forever(function () {
    a = 0
    for (let index = 0; index < 5; index++) {
        led.plot(a, 2)
        basic.pause(25)
        a += 1
        basic.pause(25)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        led.plot(a, 2)
        basic.pause(25)
        a += -1
        basic.pause(25)
        basic.clearScreen()
    }
})
