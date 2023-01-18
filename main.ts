input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let y = 0
let x = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        x += -1
        serial.writeValue("x", x)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        x += 1
        serial.writeValue("x", x)
    }
    led.plot(x, y)
    basic.pause(100)
})
