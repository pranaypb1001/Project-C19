var ball,ball_img,paddle,paddle_img,edges;

function preload() {
  /* preload your images here of the ball and the paddle */
  ball_img=loadImage("ball.png");
  paddle_img=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(50,200,10,10);
  ball.addImage(ball_img);
  ball.velocityX=9
  
  paddle= createSprite(350,200,10,10);
  paddle.addImage(paddle_img);
  
  
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,randomVelocity);
  
  
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(-6,8);
}

