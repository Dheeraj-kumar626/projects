class bubble{
    constructor(q,w){
        if(q%2==0)
            this.x=6*r+(2*w*r);
        else
            this.x=7*r+(2*w*r);
        this.y=(q*r*1.732)+r;
        this.col=random([color(0,255,0),color(0,0,255)]);
        this.exist=1;//as soon as exist is 0 splice the bubble
    }
    show(){
        if(this.exist==0)
            ;
        else{
           push();
           fill(this.col);
           strokeWeight(1);
           stroke(0);
           ellipse(this.x,this.y,2*r);
           pop();
        }
    }
    spread(l,m,n){
        
        
//        
        if(b[l-1]){
           if( b[l-1][m-1]){
            if(floor(dist(b[l-1][m-1].x,b[l-1][m-1].y,this.x,this.y))==(2*r-1) && this.col.levels[0]===b[l-1][m-1].col.levels[0] && this.col.levels[1]===b[l-1][m-1].col.levels[1] && this.col.levels[2]===b[l-1][m-1].col.levels[2] ){
                                b[l-1][m-1].exist=0;
                                b[l-1][m-1].spread(l-1,m-1);
            }
           }
            if(b[l-1][m]){
                
            if(floor(dist(b[l-1][m].x,b[l-1][m].y,this.x,this.y))==(2*r-1) && this.col.levels[0]===b[l-1][m].col.levels[0] && this.col.levels[1]===b[l-1][m].col.levels[1] && this.col.levels[2]===b[l-1][m].col.levels[2]){
                                b[l-1][m].exist=0;
                                b[l-1][m].spread(l-1,m);


            }

        }
            if(b[l-1][m+1]){
            if(floor(dist(b[l-1][m+1].x,b[l-1][m+1].y,this.x,this.y))==(2*r-1) && this.col.levels[0]===b[l-1][m+1].col.levels[0] && this.col.levels[1]===b[l-1][m+1].col.levels[1] && this.col.levels[2]===b[l-1][m+1].col.levels[2]){
                                b[l-1][m+1].exist=0;
                                b[l-1][m+1].spread(l-1,m+1);
            }
        }
        }
        //        
    }
    
    

}

