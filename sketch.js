var p1,p1Image;
var p2,p2Image;
var p3,p3Image;
var p4,p4Image;
var gamestate = "part1";
var button;
var hbImage;

function preload(){
  p1Image = loadImage("p1.png");
  p2Image = loadImage("p2.png");
  p3Image = loadImage("p3.png");
  p4Image = loadImage("p4.png");
  hbImage = loadImage("hb.png")
  
}

function setup() {
  createCanvas(600,600);
  p1 = createSprite(170,300,30,30);
  p1.addImage(p1Image);

  p2 = createSprite(175,420,30,30);
  p2.addImage(p2Image);

  p3 = createSprite(300,420,30,30);
  p3.addImage(p3Image);

  p4 = createSprite(300,300,30,30);
  p4.addImage(p4Image);

  button = createSprite(100,100,100,50);
  button.shapeColor = "blue";
}

function draw() {

if(gamestate === "part1"){

  background("green"); 

  if(mousePressedOver(p1)){
    p1.destroy();
  }
  if(mousePressedOver(p2)){
    p2.destroy();
  }
  if(mousePressedOver(p3)){
    p3.destroy();
  }
  if(mousePressedOver(p4)){
    p4.destroy();
  }
if(mousePressedOver(button)){
  gamestate = "part2"
}


}
if(gamestate === "part2"){
  background(hbImage);
  button.visible = false;
}
  


  drawSprites();
  }

  
