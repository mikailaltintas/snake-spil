tiles.setCurrentTilemap(tilemap`level1`)
game.onUpdate(function () {
    let mySprite: Sprite = null
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
