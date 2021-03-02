
class Paper  {
    constructor(x,y,r){
       
    var options = {
        isStatic:false,
        'friction':0.0,
        'density':0.1,
        'restitution':0.6
    }
    
    this.x=x;
    this.y=y;
    this.r=70;
    this.image=loadImage("paper.png");


    this.body=Bodies.circle(this.x, this.y, this.r, options)
    World.add(world,this.body);
}
    
    display(){
    
     var pos=this.body.position
    push();
    translate(pos.x,pos.y);
    strokeWeight(1);
    fill("red");
    imageMode(CENTER)
    image(this.image,60,40, this.r,this.r);
    pop();
    }
    }