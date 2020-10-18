 var  dog, happyDog, database, foodS, foodStock,dogIMG,dpgIMG2;

function preload()
{
  dogIMG=loadImage("Dog.png")
  dogIMG2=loadImage("happydog.png")

}

function setup() {
  database= firebase.database();

  createCanvas(500, 500);

  dog = createSprite(250,250,50,50);
  dog.addImage(dogIMG);
  dog.scale=0.2
  

  foodStock= database.ref('food')
  foodStock.on("value",readStock);

}


function draw() {  
  
  background(36,120,67);

  if(keyDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogIMG2);


  }

  drawSprites();
  textSize(20)
  text("Note: press UP_ARROW to feed Ronny Milk! ",20,30);
}

function readStock(data){

foodS=data.val();

}

function writeStock(x){

database.ref('/').update ({

  food:x

}) 
   
}
