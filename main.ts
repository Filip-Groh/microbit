input.onButtonPressed(Button.A, function () {
    tab += -1
})
input.onButtonPressed(Button.AB, function () {
    sended = 1
})
radio.onReceivedString(function (receivedString) {
    if (sended == 1) {
        if (receivedString == "scissors") {
            basic.showIcon(IconNames.Scissors)
        } else if (receivedString == "paper") {
            basic.showIcon(IconNames.Chessboard)
        } else {
            basic.showIcon(IconNames.SmallSquare)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    tab += 1
})
let sended = 0
radio.setGroup(20)
sended = 0
let tab = 0
basic.forever(function () {
    if (tab < 0) {
        tab = 2
    }
    if (tab > 2) {
        tab = 0
    }
    if (sended == 0) {
        if (tab == 0) {
            basic.showIcon(IconNames.Scissors)
        } else if (tab == 1) {
            basic.showIcon(IconNames.Chessboard)
        } else {
            basic.showIcon(IconNames.SmallSquare)
        }
    } else {
        if (tab == 0) {
            radio.sendString("scissors")
        } else if (tab == 1) {
            radio.sendString("paper")
        } else {
            radio.sendString("rock")
        }
        basic.clearScreen()
    }
    basic.pause(10)
})
