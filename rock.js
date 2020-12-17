class Rock{
    constructor(x,y,width, height){
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("rock.png")
    }
    display(){
        var pos = this.body.position;
        push();
            translate(pos.x, pos.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width, this.height);
        pop();
        
    }
}