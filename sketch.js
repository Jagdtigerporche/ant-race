var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img, track;

var form, player, game;

var ground1;

function preload(){
car1Img = loadImage("500_F_225399354_tYGqkvnMalKNGtNEfMCCu9ksMISRHUg0 copy.jpg");
car2Img = loadImage("500_F_225399354_tYGqkvnMalKNGtNEfMCCu9ksMISRHUg0 copy.jpg");
car3Img = loadImage("500_F_225399354_tYGqkvnMalKNGtNEfMCCu9ksMISRHUg0 copy.jpg");
car4Img = loadImage("500_F_225399354_tYGqkvnMalKNGtNEfMCCu9ksMISRHUg0 copy.jpg");
track = loadImage("dirt copy.jpg");
ground1 = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
