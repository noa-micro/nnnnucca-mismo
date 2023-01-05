input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
})
basic.showString(" lista????")
basic.forever(function () {
	
})
