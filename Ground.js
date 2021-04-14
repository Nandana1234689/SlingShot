class Ground{
    constructor(){
      var order1={
          isStatic: true
      }
     this.ground = Bodies.rectangle(600,590,1250,20,order1);
      World.add(world,this.ground);
  
  
  }
  display(){
     
    strokeWeight(3);
    stroke('green')
      rectMode(CENTER);
    fill ("green")
      rect(this.ground.position.x,this.ground.position.y,1250,20);

    
  }
  
  
  }