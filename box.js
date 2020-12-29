class Box{

    constructor(x,y,w,h){
        var options ={
            restitution: 0.5,
            friction: 1.0,
            density: 1.2
    
    }
    this.image= loadImage("f.png");
        this.box = Bodies.rectangle(x,y,w,h,options); 
        this.width =w;
        this.height = h;
        World.add(world,this.box);
    
    }
    display(){
        imageMode(CENTER);
        push();
        translate(this.box.position.x,this.box.position.y)
         rotate(this.box.angle) ;    
         fill("green");
        image(this.image,0,0,this.width,this.height);
        pop();
        }

}


