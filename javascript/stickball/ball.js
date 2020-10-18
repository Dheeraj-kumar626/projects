class balls{
    constructor(){
        this.r=5;
        this.x=100;
        this.y=200;
    }
    create(){
        fill(255,0,0);
        noStroke();
        ellipse(this.x,this.y,this.r*2,this.r*2);
        }
    
    move(this.a,this.b){
      this.x+=5*this.a;
      this.y+=5*this.b;
    }
    
}