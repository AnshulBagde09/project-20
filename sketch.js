var car,wall;
var speed,weight;

var defor;

function setup() {
  createCanvas(1600,400);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

}

function draw() {
  background(255,255,255);  


  if(wall.x - car.x < car.width/2 + wall.width/2){
    defor=(0.5*weight*speed*speed)/22500;

  if(defor<100){
    car.shapeColor="green";
  }
  else if(defor>100&&defor<180){
    car.shapeColor="yellow";
  }
  else if(defor>180){
    car.shapeColor="red";
  }
   
  } 
  
  drawSprites();
}