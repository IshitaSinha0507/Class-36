var database;
var gameState = 0, playerCount;
var Player,game,form;

function setup(){
  
  createCanvas(400,400);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

 
}

function draw(){
  background("white");
  
  
}

