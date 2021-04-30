class   Log{
    //properties and functions
    constructor(x,y,height,angle){//arguements
    var options={
        restitutin:0.8,
        friction:0.3,
        density:1.0,
    }
    this.mbody=Bodies.rectangle(x, y, 20, height, options);
    World.add(myWorld,this.mbody);
    this.width=20;
    this.height=height;
    Matter . Body . setAngle(this.mbody,angle)   }
    display(){
        var angle=this.mbody.angle
        push ()
        translate (this.mbody.position.x,this.mbody.position.y)
        angleMode (RADIANS);
        rotate (angle);
        strokeWeight(5);
        stroke("black")
        
        rectMode(CENTER);
        fill("purple");
        rect (0,0,this.width,this.height);
        pop ()
    }
}