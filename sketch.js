 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint
 
 var engine, world;
function preload(){
 bg = loadImage("image/background.jpg")
 tree = loadImage ("image/tree.png")


}
function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  
	
    ground = new Ground()
    boy    = new Boy ()
	stone  = new Stone (232,301)

	mango1 =new Mango (871,155)
	mango2 =new Mango (970,222)
	mango3 =new Mango (1050,140)
	mango4 =new Mango (1094,227)
	mango5 =new Mango (952,90)
	chain  =new Chain (stone.body,{x:232 ,y:301 })
    chain2  =new Chain (mango1.body,{x:871 ,y:120 })
    chain3  =new Chain (mango2.body,{x:970 ,y:187 })
    chain4  =new Chain (mango3.body,{x:1050 ,y:105 })
    chain5  =new Chain (mango4.body,{x:1094 ,y:192 })
    chain6  =new Chain (mango5.body,{x:952 ,y:55 })
}
function draw(){
    background(0);
    image (bg,600,300,1200,600)  
    image (tree,1000,250,600,500)
    Engine.update(engine);

  
   ground.display()
   boy.display()
   mango1.display()
   mango2.display()
   mango3.display()
   mango4.display()
   mango5.display()
   stone.display()
   chain.display()
   chain2.display()
   chain3.display()
   chain4.display()
   chain5.display()
   chain6.display()
  
   if (stone.body.position.x>861){
       chain2.removeMango()
   }
   if (stone.body.position.x>960){
    chain3.removeMango()
   }
   if (stone.body.position.x>1040){
    chain4.removeMango()
   }
   if (stone.body.position.x>1084){
    chain5.removeMango()
   }
   if (stone.body.position.x>942){
    chain6.removeMango()
   }




   
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY })
}
	
function mouseReleased(){
	   chain.removeMango()
}
