let s,i,j;//shooter
let b=[];//bubble
let r=15;//radius of bubble
let row=11,col=16;
let bull=[];


var k;
function setup(){
   s=new shooter();
    for(i=0;i<row;i++){
        b[i]=[];
        for(j=0;j<col-2*i;j++){
            b[i][j+i-1]=new bubble(i,j+i-1);
        }
    }
    createCanvas(600,400);
}

function draw(){
    background(204,204,255);
    s.show();
    for(i=0;i<row;i++){
        for(j= 0;j<col-2*i;j++){
            b[i][j+i-1].show();
            for(k=0;k<bull.length;k++){
                if(b[i][j+i-1].exist==1 && (dist(b[i][j+i-1].x,b[i][j+i-1].y,width/2+4+bull[k].os.x+s.os.x,height+bull[k].os.y+s.os.y)<r ||
                  dist(b[i][j+i-1].x,b[i][j+i-1].y,width/2+4+bull[k].os.x+s.os.x-bull[k].os2.x,height+bull[k].os.y+s.os.y-bull[k].os2.y)<r)){
                    bull.splice(k,1);
                    b[i][j+i-1].exist=0;
                    b[i][j+i-1].spread(i,j+i-1);
                    
                }
            }
        }
    }
    for(i=0;i<bull.length;i++){
            bull[i].show();
    }
    if(keyIsDown(LEFT_ARROW))  
        s.rotate(-1);
    if(keyIsDown(RIGHT_ARROW))
        s.rotate(1);        
    
}
function keyPressed(){
    if(keyCode==38){
        bull[bull.length]=new bullet(s.os.heading());
    }
    
}