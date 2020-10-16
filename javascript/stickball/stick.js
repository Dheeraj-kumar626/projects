var speed=10;
class stick{
    constructor(){
        this.x1=this.x2=width;
        this.y1=random(0,height/2-10);
        this.y2=random(height/2+10,height);
        
        
    }
    show(){
        fill(255,0,0);
        rect(this.x1,0,10,this.y1);
        rect(this.x2,this.y2,10,height-this.y2);
    }
    move(){
        this.x1-=speed;
        this.x2-=speed;
    }
    check(){
        if(((this.x2<(ball.x+ball.r)) && ((this.x2+10)>(ball.x+ball.r)) && (this.y2<(ball.y+ball.r)) && ((ball.y+ball.r)<height))|| ((this.x1<(ball.x+ball.r)) && ((this.x+10)>(ball.x+ball.r)) && (0<(ball.y-ball.r)) && ((ball.y-ball.r)<this.y))){
            this.stop();
        }
    }
    stop(){
        speed=0;
    }
}