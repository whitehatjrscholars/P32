
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var score = 0;

function preload(){
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//polygon
	polygon = new Stone(200, 500, 80)
	//chain
	chain = new SlingShot(polygon.body, {x: 200, y: 500})
	//bases
	base1 = new Ground(600, 700, 400, 10)
	base2 = new Ground(1050, 500, 285, 10)
	//tower1
	//floor1
	box1 = new Square(500, 660, 50, 70, "lightblue")	
	box2 = new Square(550, 660, 50, 70, "lightblue")
	box3 = new Square(600, 660, 50, 70, "lightblue")
	box4 = new Square(650, 660, 50, 70, "lightblue")
	box5 = new Square(700, 660, 50, 70, "lightblue")
	box6 = new Square(750, 660, 50, 70, "lightblue")
	box7 = new Square(450, 660, 50, 70, "lightblue")
	//floor2
	box8 = new Square(500, 590, 50, 70, "pink")	
	box9 = new Square(550, 590, 50, 70, "pink")
	box10 = new Square(600, 590, 50, 70, "pink")
	box11 = new Square(650, 590, 50, 70, "pink")
	box12 = new Square(700, 590, 50, 70, "pink")
	//floor3
	box13 = new Square(550, 520, 50, 70, "teal")
	box14 = new Square(600, 520, 50, 70, "teal")
	box15 = new Square(650, 520, 50, 70, "teal")
	//floor4
	box16 = new Square(600, 450, 50, 70, "grey")
	//tower2
	//floor1
	box17 = new Square(950, 460, 50, 70, "lightblue")	
	box18 = new Square(1000, 460, 50, 70, "lightblue")
	box19 = new Square(1050, 460, 50, 70, "lightblue")
	box20 = new Square(1100, 460, 50, 70, "lightblue")
	box21 = new Square(1150, 460, 50, 70, "lightblue")
	//floor2
	box22 = new Square(1000, 390, 50, 70, "teal")
	box23 = new Square(1050, 390, 50, 70, "teal")
	box24 = new Square(1100, 390, 50, 70, "teal")
	//floor3
	box25 = new Square(1050, 320, 50, 70, "pink")

	Engine.run(engine);
  
}


function draw() {
  background(0);

  rectMode(CENTER)

  chain.display()

  polygon.display();

  base1.display(); 
  base2.display();

  showandscore(box1);
  showandscore(box2);
  showandscore(box3);
  showandscore(box4);
  showandscore(box5);
  showandscore(box6);
  showandscore(box7);
  showandscore(box8);
  showandscore(box9);
  showandscore(box10);
  showandscore(box11);
  showandscore(box12);
  showandscore(box13);
  showandscore(box14);
  showandscore(box15);
  showandscore(box16);
  showandscore(box17);
  showandscore(box18);
  showandscore(box19);
  showandscore(box20);
  showandscore(box21);
  showandscore(box22);
  showandscore(box23);
  showandscore(box24);
  showandscore(box25);

  fill("white")
  textSize(33)
  text("Score: " + score, 680, 40)

}

function mouseDragged(){
	Body.setPosition(polygon.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	chain.fly();
}

function keyPressed(){
	if (keyCode === 32){
		chain.attach(polygon.body, {x: 200, y: 500})
	}
}

function showandscore(item){
	item.display()
	item.score();
}
