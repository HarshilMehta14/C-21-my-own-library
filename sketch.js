function setup() {
  createCanvas(800,400);
  MR=createSprite(200, 200, 50, 50);
  Fr=createSprite(300,100,100,100);
  box=createSprite(400,300,100,50);
  Fr.debug=true;
  MR.debug=true;
  box.debug=true;
  box.shapeColor="green";
  MR.shapeColor="green";
  Fr.shapeColor="green";
  //MR.velocityX=2;
  //MR.velocityY=0;
  box.velocityY=-2;
  box.velocityX=-2;
  Fr.velocityX=2;
  Fr.velocityY=2;
}

function draw() {
  background(0,255,255);  

  MR.x=mouseX;
  MR.y=mouseY;

  text("MR - Fr = "+(MR.x - Fr.x),100,100);
  text("Fr - MR = "+(Fr.x - MR.x ),200,100);

  bounceOff(Fr,box);

  if(isTouching(box,MR)){

    MR.shapeColor="blue";
    box.shapeColor="blue";
  } else
  {
    MR.shapeColor="red";
    box.shapeColor="red";
    
  }
  drawSprites();
}

