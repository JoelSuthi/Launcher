   class Paper {
   constructor(x,y,R){ 
    var options = { 
    isStatic:false, 
    restitution:0.2, 
    friction:0.10,
    density:1.2, 
    }
   this.body = Bodies.circle(x,y,R,options); 
   this.R = R; 
   this.x = x; 
   this.y = y; 
   this.image = loadImage("paper.png");
   World.add(world, this.body); 
   } 
   display(){ 
    var pos =this.body.position; 
    var angle = this.body.angle;
    imageMode (CENTER);
    push();
    translate(pos.x, pos.y);
    rotate(angle); 
    image(this.image,0,0,this.R,this.R); 
    pop(); 
    } 
    };