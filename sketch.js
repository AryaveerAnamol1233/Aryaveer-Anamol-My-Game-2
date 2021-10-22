var bg,bgImg
var ninja,ninjaImg
var monster,monsterImg
var obstacle1,obstacle2,obstacle3
var obstaclesGroup

function setup() {
  createCanvas(1200,600);
 bg=createSprite(600,300, 1200, 800);
 bg.addImage(bgImg);
 bg.scale=0.85;
 bg.velocityX=-4

 ninja=createSprite(600,480)
ninja.addAnimation("player",ninjaImg);

monster=createSprite(280,480)
monster.addAnimation("villain",monsterImg);
monster.scale=2

obstaclesGroup=new Group()
}

function preload(){
ninjaImg=loadAnimation("images/ninja-1.png","images/ninja-2.png","images/ninja-3.png","images/ninja-4.png","images/ninja-5.png","images/ninja-6.png","images/ninja-7.png","images/ninja-8.png","images/ninja-9.png","images/ninja-10.png")
bgImg=loadImage("images/jungle.jpg")
monsterImg=loadAnimation("images/m-1.png","images/m-2.png","images/m-3.png","images/m-4.png","images/m-5.png","images/m-6.png","images/m-7.png")
obstacle1=loadImage("images/c1-.png")
obstacle2=loadImage("images/c2.png")
obstacle3=loadImage("images/c3.png")
}






function draw() {
  background(255,255,255);  
  if(keyDown("space")){
    ninja.velocityY=-10 
  }
 // ninja.velocityY=ninja.velocityY+1
  if(bg.x<500){
    bg.x=700
  }
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(1200,480,10,40);
    //obstacle.debug = true;
    obstacle.velocityX =-10
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
    
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}