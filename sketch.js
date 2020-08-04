
var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 100, 30, 10);
  fixedRect.shapeColor="blue"
  movingRect=createSprite(200, 500, 60, 10);
  movingRect.shapeColor="blue"

  movingRect.velocityY= -2
  fixedRect.velocityY= 2
}

function draw() {
  background(0);  
  if(fixedRect.x-movingRect.x<fixedRect.width/2 +  movingRect.width/2
    &&movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2)
    {
      movingRect.velocityX=movingRect.velocityX*(-1)
      fixedRect.velocityX=movingRect.velocityX*(-1)
    }


    if(fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+ movingRect.height/2)

    {
      movingRect.velocityY=movingRect.velocityY*(-1)
      fixedRect.velocityY=fixedRect.velocityY*(-1)
    }
   

  drawSprites();
}