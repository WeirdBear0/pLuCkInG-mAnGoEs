class Slingy{
    constructor(b1,point){
        var options = {
            bodyA: b1,
            pointB: point,
            length: 10,
            stiffness: 0.01
        }
        this.slingy = Constraint.create(options);
        World.add(world, this.slingy);
    }
    display(){
        if (this.slingy.bodyA){
            var p1 = this.slingy.bodyA.position;
            var p2 = this.slingy.pointB;
            strokeWeight(5);
            line(p1.x, p1.y, p2.x, p2.y);
        }
    

    }
    fly(){
        this.slingy.bodyA = null;
    }
    attach(body){
        this.slingy.bodyA = body;
    }
}