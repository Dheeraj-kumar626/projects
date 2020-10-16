class balls{
    constructor(){
        this.r=10;
        this.x=100;
        this.y=200;
    }
    create(){
        fill(255,0,0);
        noStroke();
        ellipse(this.x,this.y,this.r*2,this.r*2);
        if(life>0)
        this.y+=1;
        }
    
    move(a,b){
      this.x+=5*a;
      this.y+=5*b;
    }
    
}