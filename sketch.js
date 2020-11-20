
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var distbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);	
	Engine.run(engine);


	paper = new Paper(60,645,20);
	dustbin1 = new Dustbin(600,655,200,10);
	dustbin2 = new Dustbin(500,600,10,100);
	dustbin3 = new Dustbin(700,600,10,100);

}


function draw() {
  rectMode(CENTER);
  background("white");
  

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

drawSprites(); 
keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1});
	}

}

