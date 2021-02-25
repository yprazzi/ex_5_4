let x = 0
let x1 = 0
basic.forever(function () {
    x = 0
    x1 = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x, 0)
        basic.pause(200)
        led.toggle(x + 1, 0)
        basic.pause(200)
        led.toggle(x + 2, 0)
        basic.pause(200)
        led.toggle(x + 3, 0)
        basic.pause(200)
        led.plot(x1, 0)
        basic.pause(200)
        led.unplot(x1, 0)
        basic.pause(200)
        led.toggle(x1 - 1, 0)
        basic.pause(200)
        led.toggle(x1 - 2, 0)
        basic.pause(200)
        led.toggle(x1 - 3, 0)
    }
})
