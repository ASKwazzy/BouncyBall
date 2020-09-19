const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true,
    }
    var ball_options ={
        restitution: 1,
        friction: 0.3,
        density: 1.0,
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    ball = Bodies.circle(200,200,10,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x, ball.position.y, 10,10);
}