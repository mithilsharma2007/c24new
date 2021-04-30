class Pig{
    //properties and functions
    constructor(x,y){//arguements
    var options={
        restitution:0.8,
        friction:0.3,
        density:1.0,
    }
    this.mbody=Bodies.rectangle(x, y, 50 , 50, options);
    World.add(myWorld,this.mbody);
    this.width=50;
    this.height=50;
    }
    display(){
        var angle=this.mbody.angle
        push ()
        translate (this.mbody.position.x,this.mbody.position.y)
        angleMode (RADIANS);
        rotate (angle);
       
        
        rectMode(CENTER);
        fill("cyan");
        rect (0,0,this.width,this.height);
        pop ()
    }
}