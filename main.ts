let Radius = 0
player.onChat("run", function (num1) {
    shapes.circle(
    GRASS,
    pos(0, Radius, 0 - 0),
    5,
    Axis.X,
    ShapeOperation.Replace
    )
})
player.onChat("rainbow", function () {
    Radius += 1
})
player.onChat("run", function () {
	
})
