var bc;        

class boosters{
    constructor(bc){
     this.x=bc;
        this.b=1;
    }
   move(){
      this.x-=speed2;
    }
   life(){
      stroke(255,0,0);
      fill(255);
      rect(this.x-9,196,23,23);
      fill(255,0,0);
      rect(this.x,200,5,15);
       rect(this.x-5,205,15,5);
    }
    check(){
        if(
            (
                ((ball.x+ball.r>=this.x-9)  && (ball.x+ball.r<=this.x+14) 
                ) 
                || 
                ( (ball.x-ball.r>=this.x-9)   && (ball.x-ball.r<=this.x+14) 
                ) 
            )  
         && (
                ((ball.y+ball.r>=196)&&(ball.y+ball.r<=219)
                ) 
                ||
                ( (ball.y-ball.r>=196)&&(ball.y-ball.r<=219)  
                ) 
            )
            
        && this.b==1
        ){  
           life++; 
            this.b=2;
            flag4=1;
        }
    }
 
 }