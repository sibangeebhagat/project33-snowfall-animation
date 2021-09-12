var snowflake,snowflakeimg,bgimg;

function preload(){
snowflakeimg = loadImage("snow5.webp");
bgimg = loadImage("snow2.jpg");

}



function setup() {
  createCanvas(400,400);
  



}

function draw() {
  background(bgimg);  

if(frameCount%30=== 0 ){
  snowflake = createSprite(random(20,400),5,10,10);
  snowflake.scale = 0.1;
  snowflake.addImage(snowflakeimg);
  snowflake.velocityY = 2;
}


  drawSprites();
}