var k,l,m,xyz;
var d=0;
      var  min2=500;var side_size=40;
var q=0;//distance from endpoint loop everytime udated and to check if q<this.dFromEnd

//var side=20;
class boxes{
    constructor(k,l){
        this.x=k;
        this.y=l;
        this.visited=0;
        this.neigh=[];
        this.l12=this.l23=this.l34=this.l41=true;
        this.rev;
        this.dFromEnd=100;
    }
    show(){
        if(this.l12)
            line((this.x+1)*side_size,(this.y+1)*side_size,(this.x+2)*side_size,(this.y+1)*side_size);
        if(this.l23)
            line((this.x+2)*side_size,(this.y+1)*side_size,(this.x+2)*side_size,(this.y+2)*side_size);
        if(this.l34)
            line((this.x+2)*side_size,(this.y+2)*side_size,(this.x+1)*side_size,(this.y+2)*side_size);
        if(this.l41)
            line((this.x+1)*side_size,(this.y+1)*side_size,(this.x+1)*side_size,(this.y+2)*side_size);
        if(this.visited==1){
            push();
            noStroke();
            fill(255,0,255,100);
            rect((this.x+1)*side_size,(this.y+1)*side_size,side_size,side_size);
            pop();
        }
    }
    //to highlight current box
    show1(){
        push();
            noStroke();
            fill(0,255,0);
            rect((this.x+1)*side_size,(this.y+1)*side_size,side_size,side_size);
            pop();
    }
    //to find the next box
    next(){
                this.visited=1;
        
        
        this.neigh=[];
        if(this.x>0)
            if(b[this.x-1][this.y].visited==0)
                this.neigh.push(b[this.x-1][this.y]);
        if(this.y>0)
            if(b[this.x][this.y-1].visited==0)
                this.neigh.push(b[this.x][this.y-1]);
        if(this.x<col-1)
            if(b[this.x+1][this.y].visited==0)
                this.neigh.push(b[this.x+1][this.y]);
        if(this.y<row-1)
            if(b[this.x][this.y+1].visited==0)
                this.neigh.push(b[this.x][this.y+1]);
    if(this.neigh.length>0){
            this.lucky=random(this.neigh);
            this.lucky.rev=curr;
            curr=this.lucky;
            total++;
        if(this.lucky.x<this.x){
            this.lucky.l23=false;
            this.l41=false;
        }
        else if(this.lucky.x>this.x){
            this.lucky.l41=false;
            this.l23=false;
        }
        else if(this.lucky.y<this.y){
            this.lucky.l34=false;
            this.l12=false;
        }
        else if(this.lucky.y>this.y){
            this.lucky.l12=false;
            this.l34=false;
        }
        }
   else
        
         curr=this.rev;
        
        
    }
    
    endudate(){
        //updates minimum distance from end
        if((this.dFromEnd>(end.dFromEnd-1)) && this.dFromEnd!=0)
        {this.dFromEnd=end.dFromEnd+1;
    }
        
    }
    
//    show2(){
//        push();
//            noStroke();
//            fill(150,150,0);
//            rect((this.x+1)*10,(this.y+1)*10,10,10);
//            pop();
//        
//    }
//    
   
    next2(){        
        if(this.y<row-1 && !(this.l34)){
            if(b[this.x][this.y+1].dFromEnd===this.dFromEnd-1){
                start=b[this.x][this.y+1];
            }
        }
        if(this.y>0 && !(this.l12)){
            if(b[this.x][this.y-1].dFromEnd===this.dFromEnd-1){
                start=b[this.x][this.y-1];
            }
        }
        if(this.x<col-1 && !(this.l23)){
            if(b[this.x+1][this.y].dFromEnd===this.dFromEnd-1 ){
                start=b[this.x+1][this.y];
            }
        }
        
        if(this.x>0 && !(this.l41)){
            if(b[this.x-1][this.y].dFromEnd==this.dFromEnd-1){
                start=b[this.x-1][this.y];
            }
        }
            
    }
    show2(){
        //to highlight cell of the player
        push();
            noStroke();
            fill(255,0,0);
            rect((this.x+1)*side_size,(this.y+1)*side_size,side_size,side_size);
            pop();
    }
    
    
}

function backtrack(s,t){
    end=b[s][t];
    if(end==start){
        flag7=1;
    }
    if(!end.l12){
        b[end.x][end.y-1].endudate();
    }
    if(!end.l23)
        b[end.x+1][end.y].endudate();
    if(!end.l34)
        b[end.x][end.y+1].endudate();
    if(!end.l41)
        b[end.x-1][end.y].endudate();
}