radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        RunCycle = false
        Received_effect()
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        RunCycle = true
    } else if (receivedNumber == 1) {
        RunCycle = false
        Received_effect()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        RunCycle = true
    } else if (receivedNumber == 2) {
        RunCycle = false
        Received_effect()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        RunCycle = true
    } else if (receivedNumber == 3) {
        RunCycle = false
        Received_effect()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
        RunCycle = true
    }
})
input.onButtonPressed(Button.A, function () {
    A += 1
})
function Received_effect () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
}
function radioTransmit (num: number) {
    radio.sendNumber(num)
}
input.onButtonPressed(Button.B, function () {
    B += 1
})
function Sent () {
    basic.clearScreen()
    basic.showString("Sent")
    B = 0
}
let RunCycle = false
let B = 0
radio.setGroup(69)
radio.setFrequencyBand(0)
radio.setTransmitPower(7)
let A = 0
B = 0
RunCycle = true
basic.forever(function () {
    if (RunCycle) {
        if (A == 0) {
            basic.showIcon(IconNames.Heart)
            if (B == 1) {
                radioTransmit(0)
                Sent()
            }
        } else if (A == 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            if (B == 1) {
                radioTransmit(1)
                Sent()
            }
        } else if (A == 2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            if (B == 1) {
                radioTransmit(2)
                Sent()
            }
        } else if (A == 3) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
            if (B == 1) {
                radioTransmit(3)
                Sent()
            }
        } else if (A >= 4) {
            A = 0
        }
    }
})
