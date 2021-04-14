class Mango {
    constructor(a,b){
    var order = {
        'restitution':0, 
        'friction':1
       
    }
    this.body = Bodies.rectangle(a,b,50,50,order);
    World.add(world,this.body);
    this.image=loadImage("image/mango.png")
    
    }
    
    
    display (){
    
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,60,60);
    
    
    }
  
    
    }