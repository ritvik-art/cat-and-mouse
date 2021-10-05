var bgImng;
var cat,catimage1,catimage2,catimage3;
var mouse,mouseimg1,mouseimage2,mouseimage3

function preload() {
    //load the images here
    bgImng = loadImage("images/garden.png")
catimage1 = loadAnimation("images/cat1.png")
mouseimage1 = loadAnimation("images/mouse1.png")

catimage2 = loadAnimation("images/cat2.png","images/cat3.png")
catimage3 = loadAnimation("images/cat4.png")

mouseimage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseimage3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addAnimation("catsleeping", catimage1)
cat.scale = 0.2

mouse=createSprite(200,600)
mouse.addAnimation("mousestanding", mouseimage1)
mouse.scale=0.1

}

function draw() {

    background(bgImng);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)){

cat.veloxityX = 0
cat.addAnimation("catcollide", catimage3)
cat.x = 280
cat.scale = 0.2
cat.changeAnimation("catcollide")

mouse.addAnimation("mousecollide", mouseimage3)
mouse.scale = 0.1
mouse.changeAnimation("mousecollide")

}




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode===LEFT_ARROW){

mouse.addAnimation("mouseteasing", mouseimage2)
mouse.frameDelay = 25
mouse.changeAnimation("mouseteasing")

cat.addAnimation("catwalking", catimage2)
cat.velocityX = -4
cat.changeAnimation("catwalking")



}



}
