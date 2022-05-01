var mar, marimg
var navio, navioimg1, navioimg2, navioimg3, navioimg4, navioanimação
function preload(){
mar = createSprite(300, 200, 400, 400)
marimg = loadImage("sea.png")
navioimg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")



}

function setup(){
  createCanvas(400,400);
  navio = createSprite(200, 200)
  navio.addAnimation("navioa", navioimg1)
  navio.scale = 0.3
}

function draw() {
  background("blue");
  mar.addImage(marimg)
  mar.scale = 0.3 
  mar.velocityX = -0.5
 
  if(mar.x < 0){
    mar.x = sea.width/2;
  }
    drawSprites();

 
}
