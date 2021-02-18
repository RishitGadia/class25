class Ground extends BaseClass {
   constructor(x,y,width,height){
     super(x,y,width,height)
     this.image=loadImage("sprites/base.png")
     Matter.Body.setStatic(this.body,true)
   }
  };