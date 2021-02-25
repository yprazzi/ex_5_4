let x = 0
basic.forever(function () {
    x = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x, 0)
        basic.pause(200)
        led.toggle(x + 1, 0)
        basic.pause(200)
        led.toggle(x + 2, 0)
        basic.pause(200)
        led.toggle(x + 3, 0)
        basic.pause(200)
        led.toggle(x + 4, 0)
        basic.pause(200)
    }
    x = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x, 0)
        led.toggle(x - 1, 0)
        basic.pause(500)
    }
})
