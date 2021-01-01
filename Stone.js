class Stone {
    constructor(x, y, radius){

        var options = {
            isStatic: false,
            restitution: 0.2
        }

        this.body = Bodies.circle(x, y, radius * (2/4), options)
        this.radius = radius;
        this.image = loadImage("polygon.png")

        World.add(world, this.body)
    }

    display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}