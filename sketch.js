const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var ground1;
var smasher,slingshot;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(590,280,250,15);
  ground2 = new Ground(100,height,200,300);
  //level 1
  box1 = new Box(500,275,30,30);
  box2 = new Box(530,275,30,30);
  box3 = new Box(560,275,30,30);
  box4 = new Box(590,275,30,30);
  box5 = new Box(620,275,30,30);
  box6 = new Box(650,275,30,30);
  box7 = new Box(680,275,30,30);
  //level 2
  box8 = new Box(530,235,30,30);
  box9 = new Box(560,235,30,30);
  box10 = new Box(590,235,30,30);
  box11 = new Box(620,235,30,30);
  box12 = new Box(650,235,30,30);
  //level 3
  box13 = new Box(560,195,30,30);
  box14 = new Box(590,195,30,30);
  box15 = new Box(620,195,30,30);
  //top
  box16 = new Box(590,155,30,30);

  smasher = new Smasher(100,150);
  slingshot = new SlingShot(smasher.body,{x:200, y:150});
}

function draw() { 
  Engine.update(engine);
  background(0);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  smasher.display();
  slingshot.display();
  push();
  stroke(0,0,255);
  strokeWeight(0.75);
  fill(255);
  ellipse(random()*width,random()*height,3,3);
  ellipse(random()*width,random()*height,5,5);
  ellipse(random()*width,random()*height,1,1);
  ellipse(random()*width,random()*height,2,2);
  ellipse(random()*width,random()*height,5,5);
  ellipse(random()*width,random()*height,3,3);
  ellipse(random()*width,random()*height,5,5);
  ellipse(random()*width,random()*height,1,1);
  ellipse(random()*width,random()*height,2,2);
  ellipse(random()*width,random()*height,5,5);
  ellipse(random()*width,random()*height,3,3);
  ellipse(random()*width,random()*height,5,5);
  ellipse(random()*width,random()*height,1,1);
  ellipse(random()*width,random()*height,2,2);
  ellipse(random()*width,random()*height,5,5);
  ellipse(random()*width,random()*height,3,3);
  ellipse(random()*width,random()*height,5,5);
  ellipse(random()*width,random()*height,1,1);
  ellipse(random()*width,random()*height,2,2);
  ellipse(random()*width,random()*height,5,5);
  pop();
  ground1.display();
  ground2.display();
}
function mouseDragged(){
  Matter.Body.setPosition(smasher.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
if(key == ' '){
Matter.Body.setPosition(smasher.body, {x: 200 , y: 150});
slingshot.attach(smasher.body);
}

}