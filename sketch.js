
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale= 0.1;

ground = createSprite(400,350,900,10);
ground.velocityX =0.4;
ground.x =ground.width/2;
  console.log(ground.x)
}


function draw() {

  background("");
  drawSprites();

   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 450) {
        monkey.velocityY = -12;
    
      
    //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
      console.log(monkey.y)
       
      
      drawSprites();
   
    
    
    }


}






