const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruitLink
function setup() 
{
  var fruitOptions = {
    density: 0.005
  }
  createCanvas(500,windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,height-50,600,20);
  rope = new Rope(5,{x:300,y:-20})
  fruit = Bodies.circle(300,300,15,fruitOptions)
  Matter.Composite.add(rope.body,fruit)
  fruitLink = new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  ellipse(fruit.position.x,fruit.position.y,15)

  Engine.update(engine);
  

 
   
}
