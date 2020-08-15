const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;

function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var options={
   isStatic:true 
  }
  ground=Bodies.rectangle(400,390,800,10,options);
  World.add(world,ground);

//console.log(object);
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
 
}