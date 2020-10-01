var canvas
var light1, light2, man, rainImg, backScreen

var thunder, drop, rain =[], rainSound


function preload(){
  //light1 =
  //light2 =  
  //man = 
  //rainImg =
  backScreen = loadImage("images/city.jpg")
  man = loadImage("man.png")
  light1= loadImage("thunder.png")
  light2= loadImage("thunder2.png")

  rainSound = loadSound("rat.mp3")
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  
  
  for(var i =0; i<200; i= i+1) {
    drop = new Drop(random(0,width),random(0,height))
    rain.push(drop)
  }

  thunder = createSprite(width/2,10,40,40)

}


function draw(){
  
  background(backScreen);
  image (man,windowWidth/2,windowHeight/2,300,300)


  thunder.x = random(10,width-10)
  var rand = Math.round(random(1,2))
  switch (rand) {
    case 1: thunder.addImage(light1)
      
      break;
    case 2: thunder.addImage(light2)
      break;
    default:
      break;
  }

  rainSound.play()

  for(var i =0; i<rain.length; i= i+1) {
    rain[i].display();
    rain[i].fall();
  }


  drawSprites()

}
