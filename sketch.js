
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png")
}

var boy, tree;
var ground;
var mango;
var rock;
var rope;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,800,10);
	boy = createSprite(150,575,10,10);
	boy.addImage("boy", boyImage);
	boy.scale = 0.3;
	mango = new Mango(500, 450,50,50);
	mango1 = new Mango(520, 420,50,50);
	mango2 = new Mango(540, 440,50,50);
	mango3 = new Mango(620, 440,50,50);
	mango4 = new Mango(600, 420,50,50);
	mango5 = new Mango(640, 420,50,50);
	mango6 = new Mango(660, 440,50,50);
	tree = createSprite(600,518,10,10);
	tree.addImage("tree", treeImage);
	tree.scale = 0.5;
	rock = new Rock(90,530,40,40);
	rope = new Slingy(rock.body, {x:90,y:530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  ground.display();
  
  drawSprites();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  rock.display();
  rope.display();
  detect(rock, mango);
  detect(rock, mango1);
  detect(rock, mango2);
  detect(rock, mango3);
  detect(rock, mango4);
  detect(rock, mango5);
  detect(rock, mango6);



 
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    rope.fly();
}

function detect(drock, dmango){
	mangopos = dmango.body.position;
	rockpos = drock.body.position;

	var distance = dist(rockpos.x, rockpos.y, mangopos.x, mangopos.y);
	if (distance<= drock.width/2+dmango.width/2){
		Matter.Body.setStatic(dmango.body, false);
		console.log("touch");
	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(rock.body, {x:90, y:530});
		rope.attach(rock.body);
		console.log("reset");
	}
}







