class Stone {
    constructor(x,y){
    var order = {
       // isStatic: false,
        'restitution':0.8, 
        'friction':1, 
        'density':1
    }
    this.body = Bodies.rectangle(x,y,50,50,order);
    World.add(world,this.body);
    this.image=loadImage("image/stone.png")
    
    }
    
    
    display (){
    
       // this.body.position.x=mouseX
       // this.body.position.y=mouseY
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
    
    
    }
    
    
    }