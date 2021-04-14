class Boy {
    constructor(){
    var order = {
        isStatic: true
    }
    this.body = Bodies.rectangle(300,450,50,50,order);
    World.add(world,this.body);
    this.image=loadImage("image/boy.png")
    
    }
    
    
    display (){
    
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,150,300);
    
    
    }
    
    
    }