const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot,holder,ball,ground;
var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14
var block15
var block16
var ball;
var stand1,stand2;
var polygon_image;
var backgroundImg

function preload(){
  getBackgroundImage();

}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);

  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);

//level1
  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);

//level2
  block8 = new Block(310,235,30,40);
  block9 = new Block(340,235,30,40);
  block10 = new Block(370,235,30,40);
  block11 = new Block(400,235,30,40);
  block12 = new Block(430,235,30,40);

  //level3
  block13 = new Block(340,195,30,40);
  block14 = new Block(370,195,30,40);
  block15 = new Block(400,195,30,40);

  //top
  block16 = new Block(370,255,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(this.ball,{x:200,y:200});
  
}

function draw() {
  if(backgroundImg){

    background(backgroundImg);  
  }

  text(mouseX+","+mouseY,40,364)
  Engine.update(engine);

  strokeWeight(2);
  stroke(15);

  stand1.display();
  stand2.display();

  fill("black")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("orange")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("violet")
  block13.display();
  block14.display();
  block15.display();

  fill("blue")
  block16.display();

  ellipse(ball.position.x,ball.position.y,20);
  slingshot.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.ball);
  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON.datetime);

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>= 06 && hour <= 18){
    bg = "image/night.jpg"
  }
  else{
    bg = "image/day.jpg"
  }
  backgroundImg = loadImage(bg);
}