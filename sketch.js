
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var Ground,ranY;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  score = 0;
  
  monkey = createSprite(80,330);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.13;
  
  ground = createSprite(250,390,1500,20);
  ground.x = ground.width/2;
  ground.velocityX = -4;

  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
 background("white");
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  textSize(35);
  fill("black");
  text("Survival Time: "+ score,110,57);
  
  Score();
  food();
  obstacles();
  
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space") && monkey.y == 340.09){
    monkey.velocityY = -17;
  }



  
 drawSprites(); 
}

function food(){
  ranY = Math.round(random(120,200));
 if(World.frameCount % 80 == 0){
   banana = createSprite(500,ranY);
   banana.addAnimation("running",bananaImage);
   banana.scale = 0.1;
   banana.lifetime = 120;
   banana.velocityX = -5;
   bananaGroup.add(banana);
   
  monkey.depth = banana.depth;
  monkey.depth = monkey.depth + 1;
 }
}

function obstacles(){
  if(World.frameCount % 300 == 0){
    obstacle = createSprite(500,353);
    obstacle.addAnimation("running",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 150;
    obstacle.velocityX = -8;
    obstacleGroup.add(obstacle);
  }
}

function Score(){
  score = Math.round(frameCount/frameRate());
}






