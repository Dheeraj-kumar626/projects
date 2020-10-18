var b=[],side,row,col,curr,next;
var total=1,flag=1;
var curr2;
var end;//end starts from right bottom corner to left to corner
var distance=0;
var flag7=0;
var start;
var framerate=100;
//from distance=0 to distance =n we will go to all boxes and update their neighbours distance
function setup(){
    createCanvas(550,550);
    side=40;
    row=int(height/side)-1;
    col=int(width/side)-1;
    
    for(i=0;i<row;i++){
        b[i]=[];
        for(j=0;j<col;j++){
            b[i][j]=new boxes(i,j);
        }
    }
    end=endOrginal=b[row-1][col-1];
    last_sec=second();star=60;

        curr=b[0][0];
    end.dFromEnd=0;
    start=b[0][0];//starting while going from 1 oint to another

}

function draw(){
    frameRate(framerate);
    background(255);
    endOrginal.show2(); 
    start.show1();


    for(i=0;i<row;i++){
        for(j=0;j<col;j++){
            b[i][j].show();
        }
    }
    if(total<row*col){
    curr.show1();
    curr.next();
    }
    else if(total==row*col)
    {
        curr.visited=1;
     curr.show1();
     console.log("FDDFFDDFFDRGR");
     total++;}
    else if(flag7==0){
        while(flag7==0){
            //flag7 becomes 1 when end=start
           for(i=0;flag7==0 && i<row;i++){
               for(j=0;flag7==0 && j<col;j++){
                   if(b[i][j])
                   if(b[i][j].dFromEnd==distance){
                       backtrack(i,j);
                   }
               }
           }
            distance++;
            
        }
    
    }
    else if(endOrginal!=start){
        while(second()!=last_sec){
            last_sec=second();
            star--;
        }
        framerate=4;
        start.show1();
        start.next2();
    }
    else 
    {
        stroke(255,0,0);
         fill(255,0,0);
         textSize(40);
         text("YOU LOST", 200,250);
        console.log("game over");
        noLoop();
    }
    
    stroke(0);
    fill(0);
    textSize(18);
    text("Time remaining : "+star,10,20);
    if(star==0){
        stroke(0,255,0);
         fill(0,255,0);
         textSize(40);
         text("YOU WON!!", 190,250);
        noLoop();
    }
    
}
function keyPressed(){
    if(keyCode==37 && !(endOrginal.l41)){//left
     end=endOrginal=b[endOrginal.x-1][endOrginal.y];
        console.log("Changed");
 }
    else if(keyCode==39&& !(endOrginal.l23)){//right
     end=endOrginal=b[endOrginal.x+1][endOrginal.y];
                console.log("Changed");

 }
    else if(keyCode==38 && !(endOrginal.l12)){//up
     end=endOrginal=b[endOrginal.x][endOrginal.y-1];
                console.log("Changed");

 }
    else if(keyCode==40 && !(endOrginal.l34)){//down
     end=endOrginal=b[endOrginal.x][endOrginal.y+1];
                console.log("Changed");

 }
    if(keyCode==37 || keyCode==38 || keyCode==39 || keyCode==40){
        flag7=0;
        for(i=0;i<row;i++){
            for(j=0;j<col;j++){
                b[i][j].dFromEnd=100;
            }
        }
        end.dFromEnd=0;
        distance=0;
        
    }
    
    
}
     
     
     
     
     
    