var dog,happyDogImg,dogimg;
var Database;
var foodS,foodStock;

function preload(){
   dogimg=loadImage("Dog.png");
   happyDogImg=loadImage("happydog.png");
  }

function setup() {
 createCanvas(500,500);
  textSize(20); 
  dog = createSprite(250,250);
  dog.addImage(dogimg);
  dog.scale = 0.15;
  }

function draw() {
  background(46,139,87);
  
  DataBase = firebase.database()
  foodStock = DataBase.ref('food');
  foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)){
    dog.addImage(happyDogImg)
    writeStock(foodS);
  } 

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press the up arrow key to feed milk",130,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  DataBase.ref('/').update({
    food:x
  })
}