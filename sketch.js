var paper,rect1,ground,dustbin,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
    ground=new Ground(600,390,1200,20);
    paper=new Paper(200,200,20);
    rect1=new Dustbin(900,300,180,200);
    
    rect2=createSprite(1000,330,20,100);
    rect2.shapeColor="white";
    rect3=createSprite(800,330,20,100);
    rect3.shapeColor="white";
}


function draw() {
  background("grey");
  Engine.update(engine);
  ground.display();
 rect1.display();
 rect2.display();
 rect3.display();
 
  paper.display();
 

  drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
		
	}
	

}
