const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(10,300,500,20);
  ground = new box(0,390,10000,20);
  box2 = new target(250,200,50,70)
  box3 = new target(250,100,50,70);
  wall = new box(800,0,5,500);

   shooter = new paper(100,200,10);                                  
  chain1 = new SlingShot(shooter.body , {x : 100 , y : 200});

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
box1.display2();

ground.display();
shooter.display();
chain1.display();
box2.display();
box3.display2();
drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}
