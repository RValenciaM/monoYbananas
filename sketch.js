var arbol, arbolImg;
var bananas, bananasImg, bananasGroup;
var base, baseImg, baseGroup;
var mono, monoImg, monoBanana;
var bloqueInv, bloqueInvGroup;
var gameState = "play";
var monoComiendo;


function preload(){
  arbolImg = loadImage ("arbolo.jpg");
  baseImg = loadImage ("climber.png");
  bananasImg = loadImage ("bananas.png");
  monoImg = loadImage ("monoSalto.png");
  monoBanana = loadImage("monoBanana.png");
 
}

function setup(){
  createCanvas(600,600);
  
  arbol = createSprite(300,300);
  arbol.addImage("arbol",arbolImg);
  arbol.velocityY = 1;
 
  bloqueInvGroup = new Group();
  bananasGroup = new Group();
  baseGroup = new Group();
  
  mono = createSprite(200,200,50,50);
  mono.scale = 0.3;
  
  mono.addImage("mono",monoImg);
 
  

}
function draw(){
  background(0);
  
  if(gameState === "play"){
    
    
  
  
  if (arbol.y >400){
    arbol.y = 300;
    
  }
   if (keyDown ("space")){
      mono.velocityY = -5;
    }
    if (keyDown ("left_arrow")){
      mono.x = mono.x -3;
    }
    if (keyDown ("right_arrow")){
      mono.x = mono.x +3;
    }
  mono.velocityY = mono.velocityY + 0.8;
  if (mono.isTouching (baseGroup)){
    
    
    mono.velocityY = 0;
    

    
  }
  if (mono.isTouching (bloqueInvGroup) || mono.Y >600 || mono.Y === 600 ){
    mono.destroy();
    gameState = "end";
    
    
  }
  
  spawnBananas();
  drawSprites();
  }
  if (gameState === "end"){
    stroke ("purple");
    fill ("purple");
    textSize (30);
    text("GAME OVER", 230, 50);
  }
   
}
function spawnBananas(){
  if (frameCount %240 === 0){
   bananas = createSprite (200,-50);
     bananas.addImage (bananasImg);
     bananas.scale = 0.2
    
    base = createSprite(200,10);
    base.addImage("base",baseImg);
    
    bloqueInv = createSprite (200,10);
    bloqueInv.width = base.width;
    bloqueInv.height = 2;
    
    bananas.x = Math.round (random(120,400));
    bananas.velocityY = 1;
    
    
    base.x = bananas.x;
    base.velocityY = 1;
    
    if(mono.isTouching(bananasGroup)){
      mono.changeImage(monoBanana)
    }
    
  
    
    
     bloqueInv.x = base.x;
     bloqueInv.velocityY = 1;
    
    
    
   
    bananas.lifetime = 800;
    base.lifetime = 800;
    bloqueInv.lifetime = 800;
    
    baseGroup.add (base);      
    bananasGroup.add(bananas); 
    
   
    bloqueInv.debug = true;
    
    bloqueInvGroup.add (bloqueInv);
    
    mono.depth = bananas.depth;
    mono.depth = + 7;

    
  }
   
}

