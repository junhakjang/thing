input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
let enemy = game.createSprite(0, 0)
player = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.clearScreen()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.No)
            music.playMelody("- - - - - - - - ", 120)
        }
        basic.clearScreen()
        enemy = game.createSprite(0, 0)
        player = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
