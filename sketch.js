
var frog;
var score=0;
var wormGroup;
var bg;

function preload()
{
  wormImage = loadImage("images/worm.png")
  swampImage = loadImage("images/swampImg.png")
  frogImage = loadImage("images/frog.png")
}

function setup() {
createCanvas(600,600);
swamp =createSprite(300,300);
swamp.scale = 2.5;
swamp.addImage(swampImage)
frog =createSprite(50,550, 30,30);
frog.addImage(frogImage);
frog.scale = 0.5;

wormGroup = new Group();
}

function draw() {
background("black"); 
stroke("red");
noFill();
frog.x=mouseX;
frog.y=mouseY;

generateworms();
for (var i = 0;i<(wormGroup).length;i++)
{
  var temp=(wormGroup).get(i)
  if (frog.isTouching(temp)){
    score++;
    temp.destroy();
    temp= null;
  }
}

drawSprites();
textSize(20);
text("Worms Destroyed " +score,350,50);

}

function generateworms(){
if (frameCount % 20=== 0){
  
  var worm = createSprite(random(40, 380), random(290, 380), 40, 5);
  worm.scale = random(0.1, 0.3);
  worm.addImage(wormImage);
  worm.velocityX = random(-6, 6);
  worm.velocityY = random(-6, 6);
  wormGroup.add(worm);
}

}
