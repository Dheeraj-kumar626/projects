class stick{
    constructor(){
        this.x1=this.x2=width;
        
        this.y1=random(30,height/2);
        this.y2=random(height/2,height-30);
        while(this.y2-this.y1<50){
           this.y1=random(30,height/2);
           this.y2=random(height/2,height-30);
        }
        this.f=random(350,550);
        this.mar=0;
        this.a=1;
        
    }
    
    fall(){
        if((this.x1>=(this.f-600) && this.x1<=(this.f-400))&& life!=0){
            this.y1+=level*speed3;
            this.y2+=level*speed3;
        }
           
        else if((this.x1>=(this.f-400) && this.x1<=(this.f-200))  && life!=0){
            this.y1-=level*speed3;
            this.y2-=level*speed3;
        }
        
        else if(((this.x1>=(this.f-3) && this.x1<=(this.f+3)) || (this.mar!=0)) && life!=0){
            this.y1+=level*speed3;
            this.y2+=level*speed3;
            this.mar++;
        }
        
        
    }
    show1(){
        noStroke();
        fill(0,0,0);
        rect(this.x1,0,10,this.y1);
        rect(this.x2,this.y2,10,height-this.y2);
    }
    move(){
        this.x1-=speed;
        this.x2-=speed;
    }
    check(){
        if(
            (
                (
                (this.x2<(ball.x+ball.r)) && ((this.x2+10)>(ball.x+ball.r)) 
                && (this.y2<(ball.y+ball.r)) && ((ball.y+ball.r)<height))
            || (
                (this.x1<(ball.x+ball.r)) && ((this.x1+10)>(ball.x+ball.r)) && (0<(ball.y-ball.r)) && ((ball.y-ball.r)<this.y1))
            || ball.y<0 
            || ball.y>height 
            || ball.x<0 
            || ball.x>width) 
            && this.a==1){
                 life-=1;
                 if(life>0)
                     flag4=1;
                 this.a=2;
        }
        
        if(life==0){
            this.stop();
            
            stroke(255,0,0);
            fill(255,0,0);
            textSize(60);
            text("GAME OVER!!!", 100,180);
            textSize(30);
            text("SCORE : "+marks,210,230);
        }
    }
    stop(){
        speed=0;
        speed2=0;
        speed3=0;
    }
}
      