class bullet{
    constructor(x){
        this.os=createVector(3,0);
        this.os2=createVector(3,0);//for tail
        this.angle=x;
        this.os.rotate(this.angle);
        this.os2.rotate(this.angle);
        this.vel=createVector(5,0);
        this.vel.rotate(this.angle);
    }
    
    show(){
       stroke(0);
       strokeWeight(3); line(width/2+4+this.os.x+s.os.x,height+this.os.y+s.os.y,width/2+4+this.os.x+s.os.x-this.os2.x,height+this.os.y+s.os.y-this.os2.y);
        
        
        //move
        this.os.add(this.vel);
        
    }
    
}