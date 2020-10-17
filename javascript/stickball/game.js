var s=[];
var ball=new balls();
var i;

function setup(){
    createCanvas(600,400);
    
}

function draw(){
    background(50,100,150);
    s[0]=new stick();
    if ((frameCount%50)==0){
        s[s.length]=new stick();
    }
    ball.move();
    for(i=0;i<s.length;i++){
        s.show();
        s.move();
        s.check();
        if((s[i].x1+10)<0)
            s.splice(i,1);
    }
}


function keyPressed(){
    if (keyCode===37)
        ball.move(-1,0);
    if (keyCode===39)
        ball.move(1,0);
    if (keyCode===38)
        ball.move(0,-1);
    if (keyCode===40)
        ball.move(0,1);

}