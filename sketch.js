var ground, t1, t2, t3,t4,t5,t6, l1, l2, l3, l4, l5, l6, l7, l8, l9
var barrel,barrelGroup,barrels=[]
var mario

function preload() {
  ground1= loadImage("assets/track.png")
  t1img= loadImage("assets/track.png")
  t2img= loadImage("assets/track.png")
  t3img= loadImage("assets/track.png")
  t4img= loadImage("assets/track.png")
  t5img= loadImage("assets/track.png")
  t6img= loadImage("assets/track.png")
  l1img= loadImage("assets/ladder.png")
  l2img= loadImage("assets/ladder.png")
  l3img= loadImage("assets/ladder.png")
  l4img= loadImage("assets/ladder.png")
  l5img= loadImage("assets/ladder.png")
  l6img= loadImage("assets/ladder.png")
  marioImg= loadImage("assets/mario.png")
  barrelimg= loadImage("assets/barrel.png")
}

function setup() {
  createCanvas(600,700)
  mario=createSprite(150,620,20,20);
  mario.shapeColor="red"
  ground= createSprite(350,650)
  ground.addImage(ground1)
  ground.scale= 1.9
  //ground.rotation=-5

  t1= createSprite(270,550)
  t1.addImage(t1img)
  t1.scale= 1.9
  //t1.rotation=-355

  t2= createSprite(350,450)
  t2.addImage(t2img)
  t2.scale= 1.9
  //t2.rotation=-5

  t3= createSprite(270,350)
  t3.addImage(t3img)
  t3.scale= 1.9
 // t3.rotation=-355

  t4= createSprite(350,250)
  t4.addImage(t4img)
  t4.scale= 1.9
  //t4.rotation=-5

  t5= createSprite(270,150)
  t5.addImage(t5img)
  t5.scale= 1.6
  //t5.rotation=

  t6= createSprite(400,50)
  t6.addImage(t6img)
  t6.scale= 1
  //t6.rotation=-360

  l1=createSprite(500,600,20,80)
  l1.addImage(l1img)
  l1.scale=1.5
  
  l2=createSprite(100,500,20,80)
  l2.addImage(l2img)
  l2.scale=1.5

  l3=createSprite(500,400,20,80)
  l3.addImage(l3img)
  l3.scale=1.5

  l4=createSprite(100,300,20,80)
  l4.addImage(l4img)
  l4.scale=1.5

  l5=createSprite(500,200,20,80)
  l5.addImage(l5img)
  l5.scale=1.5

  l6=createSprite(350,100,20,80)
  l6.addImage(l6img)
  l6.scale=1.5

  barrelGroup= new Group();
}

function spawnBarrel(){
  if (frameCount%80==0) {
    barrel=createSprite(150,101,50,50)
    barrel.addImage(barrelimg)
    barrel.scale= 0.1
    barrel.velocityY=1
    barrel.velocityX=1
    barrels.push(barrel);
    console.log(barrels)
    
    barrelGroup.add(barrel)
  }
}
var t;
function draw(){
  background(0)
  spawnBarrel();
  
    mario.collide(ground);
  mario.collide(t1);
  mario.collide(t2);
  mario.collide(t3);
  mario.collide(t4);
  mario.collide(t5);
  mario.collide(t6);mario.velocityY=mario.velocityY+2;
  

  if(keyDown("right")){
    mario.x=mario.x+10;
  }
  if(keyDown("left")){
    mario.x=mario.x-10;
  }
  if(keyDown("space")){
    mario.velocityY=-10;
  }
  if( mario.isTouching(l1)){
   mario.y=520;
  }
  if( mario.isTouching(l2)){
    mario.y=420;
   }
   if( mario.isTouching(l3)){
    mario.y=320;
   }
   if( mario.isTouching(l4)){
    mario.y=220;
   }
   if( mario.isTouching(l5)){
    mario.y=120;
   }
   if( mario.isTouching(l6)){
    mario.y=20;
   }
  
   for(var i=0;i<barrels.length;i++){
    if (barrels[i].isTouching(ground)) {
      barrels[i].velocityX=-4
      barrels[i].velocityY=-3;
    }
  
    if (barrels[i].isTouching(t1)) {
      barrels[i].velocityX=4
      barrels[i].velocityY=-3;
    }
  
    if (barrels[i].isTouching(t2)) {
      barrels[i].velocityX=-4
      barrels[i].velocityY=-3;
    }
  
    if (barrels[i].isTouching(t3)) {
      barrels[i].velocityX=4
      barrels[i].velocityY=-3;
    }
  
    if (barrels[i].isTouching(t4)) {
      barrels[i].velocityX=-4;
      barrels[i].velocityY=-3;
    }
  
    if (barrels[i].isTouching(t5)) {
      barrels[i].velocityX=4
      barrels[i].velocityY=-3;
    }
    
    barrels[i].velocityY=barrels[i].velocityY+0.8
   }
   
  
  drawSprites()
}

