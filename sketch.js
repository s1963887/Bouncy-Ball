const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  //create physics engine
  engine = Engine.create();
  //creating a world using the physics engine created
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  //creating ground 
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  //add the ground to the world
  World.add(world,ground);


  var ball_options = {
    restitution : 1
  }
  ball = Bodies.circle(200,100,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  fill("white");
  ellipse(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  
}