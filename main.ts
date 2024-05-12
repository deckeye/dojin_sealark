scene.setBackgroundImage(assets.image`sealark_title0`)
let chara1 = sprites.create(assets.image`chara`, SpriteKind.Player)
chara1.setPosition(75, 86)
forever(function () {
    for (let index = 0; index < 2; index++) {
        chara1.y += 1
    }
    pause(1000)
    for (let index = 0; index < 2; index++) {
        chara1.y += -1
    }
    pause(1000)
    chara1.startEffect(effects.bubbles)
})
