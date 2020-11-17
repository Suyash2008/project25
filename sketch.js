var dustbin
var dustbin2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{dustbin = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper = new Paper(50,400,50)
	 ground = new Ground(400,600,800,20)
	 bin = new Bin(700,510,10,160)
	 bin2 = new Bin(550,510,10,160);
	 bin3 = new Bin(620,590,150,10)

	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  dustbin2 = createSprite(625,510)
  dustbin2.addImage(dustbin)
  dustbin2.scale = 0.6
  paper.display();
  ground.display();
  bin.display();
  bin2.display();
  bin3.display();

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-12})
}
if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:12})
}
 drawSprites();
}



