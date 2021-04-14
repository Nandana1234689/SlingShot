class Chain {
constructor(x,y){
  var nandana ={
 bodyA:x , 
 pointB:y ,
 stiffness : 0.05,
 length : 5
 
  }

this.chain=Constraint.create(nandana)
World.add(world,this.chain);

}
display(){

strokeWeight(0)

if( this.chain.bodyA ){
line (this.chain.bodyA.position.x,this.chain.bodyA.position.y-20,this.chain.pointB.x,this.chain.pointB.y)

}

}

removeMango(){
 this.chain.bodyA=null
}




}
