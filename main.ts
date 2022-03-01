input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Heart)
    music.playTone(294, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.Meh)
basic.forever(function () {
	
})
