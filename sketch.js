var f1, f2
var background, backgroundimg

var backgroundimg
var firefighter
var firefighterimg
var fire1
var fire1img
var score=0
var fire_Group
var prepos=null
var position="right"
var gameState="PLAY"
var screen = 0
function preload() {
backgroundimg=loadImage("background.jpg")
firefighterimg = loadImage("firefighter.png")
fire1img = loadImage("fireSheet.png")
}

function setup() {
  var can = createCanvas(windowWidth,windowHeight); 
  can.mousePressed(mp)
  firefighter=createSprite(windowWidth/10-120,windowHeight-105,100,200);
  firefighter.addImage(firefighterimg)
  firefighter.scale = 0.2
  fire_Group=new Group();
  drawSprites()
}

function draw() {
  if(screen == 0) {
    startScreen();
  }
  else if(screen == 1) {
    gameScreen()
  }  
  else if(screen == 2) {
    endScreen()
  }
  
  
  drawSprites()
  }


function startScreen() {
  background("Cyan")
  textSize(30)
  text("click on the SCREEN to know the rules ",width/2,height/1.5+20); 
  gameState="PLAY"; 
  //reset();

}
function gameScreen() {
  if(gameState==="PLAY") {
    background(backgroundimg)
    textSize(25)
    fill("cyan")
    text("Score:"+score,windowWidth-100,windowHeight-50)
    spawnFire()
    if(keyDown("right_arrow")) {
      //prepos = position
      //position = "right"
      firefighter.x = firefighter.x+10
      }
    if(keyDown("left_arrow")) {
      firefighter.x = firefighter.x-10
    }
    if(keyDown("up_arrow")) {
      firefighter.y = firefighter.y-10
    }
    if(keyDown("down_arrow")) {
      firefighter. y = firefighter.y+10
    }
    if(firefighter.isTouching(fire_Group)) {
      fire_Group.get(0).destroy()
      }

}
}

function endScreen() {
background("red")
textSize(30)
fill("black")
text("Game Over! Thank you for playing!", windowWidth/2, windowHeight/2)
}






function spawnFire() {
  if(frameCount % 180 === 0) {
    fire1 = createSprite(windowWidth,windowHeight)
    fire1.y = Math.round(random(windowHeight-600,windowHeight-400))
    fire1.x = Math.round(random(windowWidth-900,windowWidth-10))
    fire1.addImage(fire1img)
    fire1.depth=firefighter.depth
  }
}

function mp() {
if(screen == 0) {
  screen = 1
}
else if(screen == 1) {
  screen = 2
}
else if(screen == 2) {
  screen = 0
}
}