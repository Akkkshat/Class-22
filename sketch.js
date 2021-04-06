const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(400,390,800,20,ground_options);
  World.add(world,ground);


  var ballOptions={
    restitution:1.0
  }

  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);




  //console.log(object);
  //console.log(object.position.y);

}

function draw() {
  background(0);
  rectMode(CENTER); 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);


}