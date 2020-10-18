//remember non coordinate(array type) type numbering
class box{
    constructor(i,j){
        this.x=j;
        this.y=i;
//        this.filled=0;
        this.num=0;
    }
    
    show(){
        fill(255,255,153);
        rect(this.x*side+side,this.y*side+side,side,side);
        if(this.num!=0){
            fill(0);
            textSize(40);
            text(this.num,(this.x*side)+side+25,(this.y*side)+side+50);
        }
        
    }
}