var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22,38)
  bullet = createSprite(50, 200, 30, 10)
  bullet.shapeColor = (255)
  wall = createSprite(1600 - (thickness/2), 200,  thickness, height/2)
  wall.shapeColor = (80,80,80)
}

function draw() {
  background(0);  
  
  bullet.velocityX = speed;
  if(collided(bullet, wall)){
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 58){
      wall.shapeColor = color(255, 0, 0)
    }
    if(damage < 58 ){
      wall.shapeColor = color(0, 255, 0)
    }
  }
  drawSprites();
}

function collided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}