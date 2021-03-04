const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;
var player;
var ground;
var coin;
var CoinArray = [];
var backgroundImg, bg;

function preload(){
    backgroundImg = loadImage("https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600*720")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-180);
    engine = Engine.create();
    myworld = engine.world;
   
    player = new Player(100,displayHeight-300);
    ground = new Ground(displayWidth/2,displayHeight-200,displayWidth*2,20)
    
    for(var i = 0; i < 10; i++){ 
        coin = new Coin(Math.round(random(100,displayWidth)),displayHeight/4 - 10);
        coin.debug = true;
        CoinArray.push(coin); 
    }

    // bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    // bg.addImage(backgroundImg)
}


function draw(){
    background(230, 255, 230);
    Engine.update(engine);
    player.display();
    ground.display(); 

    for(var i=0; i<CoinArray.length; i++){
        CoinArray[i].display();
    }
    
    // console.log(frameCount)
    
}

function keyPressed(){
    if(keyCode === 32){
       player.jump();
     }
     if(keyCode === LEFT_ARROW){
        player.move(-5,0);
      }
      if(keyCode === RIGHT_ARROW){
        player.move(5,0);
      }
}
    
    
