class shooter{
    constructor(){
           this.os=createVector(0,-110);
        this.angle=PI/2;
 
    }
    show(){
        noStroke();
        fill(50);
        ellipse(width/2+5,height,75,75);
        stroke(50);
        strokeWeight(10);
        line(width/2+4,height,width/2+4+this.os.x,height+this.os.y);
    }

   rotate(q){
       this.os.rotate(q*PI/100);
       this.angle-=q*PI/100;
       
   }
    
    
}