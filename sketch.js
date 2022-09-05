var cactigroup
var cloudgroup 



var PLAY=1
var END=0
var gamestate=PLAY
var test
var cactis,cactis1,cactis2,cactis3,cactis4,cactis5,cactis6
var cloud,cloudimage
var ig
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloudimage = loadImage("cloud.png");
    cactis1=loadImage("obstacle1.png")
    cactis2=loadImage("obstacle2.png")
    cactis3=loadImage("obstacle3.png")
    cactis4=loadImage("obstacle4.png")
    cactis5=loadImage("obstacle5.png")
    cactis6=loadImage("obstacle6.png")
//varibles are a memorie storer



}
function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    ig=createSprite(200,195,400,20)
    ig.visible=false
    cactigroup=createGroup()
    cloudgroup=createGroup()
}
function draw() {
    background(0);
    test=Math.round(random(1,10))
    if(gamestate===PLAY){
        if (keyDown("space")&&trex.y>=150) {
            trex.velocityY = -10;
        
        
            }
            trex.velocityY = trex.velocityY + 0.8

            if (ground.x < 0) {
                ground.x = ground.width / 2;
                }

                spawnclouds();
                spawncactis();

if(cactigroup.isTouching(trex)){
    gamestate=END
}


    }
    else if (gamestate===END){
ground.velocityX=0
cloudgroup.setVelocityXEach(0)
cactigroup.setVelocityXEach(0)








    }
    console.log(test)
    //jump when the space button is pressed
 
    
   
    trex.collide(ig);
   
    drawSprites();
}
// =============================================================================
//                         clouds
// =============================================================================

function spawnclouds(){
    if(frameCount%60==0){     cloud=createSprite(600,30,25,10)
cloud.velocityX=-4
cloud.y=Math.round(random(10,50))
cloud.addImage(cloudimage)
cloud.scale=.2
cloud.lifetime=200
cloudgroup.add(cloud)
}} 

// =============================================================================
//                         cactis
// =============================================================================
function spawncactis(){
    if(frameCount%60==0){  
cactis=createSprite(600,180,10,25)
cactis.velocityX=-7
var num=Math.round(random(1,6))
// =============================================================================
//                         adding images
// =============================================================================

switch(num){
case 1:cactis.addImage(cactis1)
break;
case 2:cactis.addImage(cactis2)
break;
case 3:cactis.addImage(cactis3)
break;
case 4:cactis.addImage(cactis4)
break;
case 5:cactis.addImage(cactis5)
break;
case 6:cactis.addImage(cactis6)
break;




}
cactis.scale=0.09
cactigroup.add(cactis)
    }
}


