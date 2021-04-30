class Bird{
    //proplerties and functions
    constructor(x,y){//arguements
    var options={
        restitutin:0.8,
        friction:1.0,
        density:1.5,
    }
    this.mbody=Bodies.rectangle(x, y, 50, 50, options);
    World.add(myWorld,this.mbody);
    this.width=50;
    this.height=50;
    }
    display(){
        var angle=this.mbody.angle
        this.mbody.position.x=mouseX
        this.mbody.position.y=mouseY
        push ()
        translate (this.mbody.position.x,this.mbody.position.y)
        angleMode (RADIANS);
        rotate (angle);
        strokeWeight(5);
        stroke("white")
        
        rectMode(CENTER);
        fill("red");
        rect (0,0,this.width,this.height);
        pop ()
    }
}