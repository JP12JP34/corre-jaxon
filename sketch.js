
var bomb
var coin
var energy
var path
var power
var jaxon
var invisibleGround



function preload(){
  //imagens pré-carregadas
  jaxon = loadAnimation("Runner-1","Runner-2");
  bomb = loadImage("bomb.png");
  coin = loadImage("coin.png");
  energy= loadImage("energyDrink.png");
  path = loadImage("path.png");
  power= loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
   jaxon= createSprite (200,200,10,20);
  jaxon.addAnimation("running"), jaxon;
  //crie sprite aqui
}

function draw() {
  background(0);

}
