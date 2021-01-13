var sword, swordImage;
var alien, alienImage1;
var fruits, fruitImage1, fruitImage2, fruitImage3, fruitImage4;

var score = 0;

var fruitsGroup, aliensGroup;

var gameState = "play";

var gameOverImage;

function preload(){
swordImage = loadImage("sword.png");

alienImage1 = loadAnimation("alien1.png", "alien2.png");

fruitImage1 = loadImage("fruit1.png");  
fruitImage2 = loadImage("fruit2.png");  
fruitImage3 = loadImage("fruit3.png");  
fruitImage4 = loadImage("fruit4.png");
  
gameOverImage = loadImage("gameover.png");
}

function setup() {
 sword = createSprite(200, 200, 5, 15);
 sword.scale = 0.4;
 sword.addImage( swordImage);
  
 fruitsGroup = new Group();
 aliensGroup = new Group(); 
}

function draw(){
background("lightblue");
 
if (gameState === "play") {
  
 sword.x = mouseX;
 sword.y = mouseY;
 
 fruitsfunc();
 enemyfunc();
  
 if (sword.isTouching(fruitsGroup)) {
   fruitsGroup.destroyEach();
   score = score + 1;  
 } 
 else { 
 if (aliensGroup.isTouching(sword)) {
  gameState = "end";
   sword.x = 200;
  sword.y = 200
  fruitsGroup.destroyEach();
  aliensGroup.destroyEach();
  
  fruitsGroup.setVelocityXEach(0);
  aliensGroup.setVelocityXEach(0);
  
  
    sword.addImage(gameOverImage);
 }
} 
}
drawSprites();
  
text("SCORE: "+score, 200, 50);
}

function fruitsfunc() {
 
 if (frameCount % 80 === 0) {
  fruits = createSprite(400, 200, 50, 50);
  fruits.scale = 0.2;
  
   rand = Math.round(random(1,4));
  
    if (rand === 1) {
      fruits.addImage(fruitImage1);
    } else if (rand === 2) {
      fruits.addImage(fruitImage2);
    } else if (rand === 3){
      fruits.addImage(fruitImage3);
    } else {
      fruits.addImage(fruitImage4);
    }
  
  
  fruits.y = Math.round(random(1, 400));
  fruits.velocityX = -6;
  fruits.lifetime = 150;
  fruitsGroup.add(fruits);
 }
}

function enemyfunc() {
  
  if (frameCount % 100 === 0) {
    alien = createSprite(400, 200, 50, 50);
    alien.addAnimation("monster", alienImage1);
    alien.y = Math.round(random(1,400));
    alien.velocityX = -6;
    alien.lifetime = 150;
    
   aliensGroup.add(alien); 
  }
 
}