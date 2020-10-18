//remember non coordinate(array type) type numbering
var side=80;
var row=4;
var col=4;
var i,j;
var b=[];
var start,start2;
var khaali=[];
var flag,score=0;
var filled=[];
var over=0;//to indicate game over
function setup(){
    createCanvas(420,420);
    for(i=0;i<row;i++){
        b[i]=[];
        for(j=0;j<col;j++){
            b[i][j]=new box(i,j);
            khaali.push(b[i][j]);
        }
    }
    start=b[floor(random(3.99))][floor(random(3.99))];
    do{
        start2=b[floor(random(3.99))][floor(random(3.99))];
    }while(start==start2);
    rem(khaali,b,start.y,start.x);
    rem(khaali,b,start2.y,start2.x);

    start.num=2;
    start2.num=4;    

}

function draw(){
    if(over==1){
        fill(255,255,153,100);
        rect(side,side,row*side,col*side); 
        textSize(55);
        fill(255,0,0,255);
        console.log("game over");
        text("Game over",side+20,side+100);
        textSize(30);
        text("Score: "+score,side+100,side+150);
        noLoop();
    }
    else{
    background(255);
    for(i=0;i<row;i++){
        for(j=0;j<col;j++){
            b[i][j].show();
        }
    }
    
    textSize(25);
    fill(0);
    text("Score: "+score,290,45);
    }
    
    
}

function keyPressed(){
    if(keyCode==39){//right
        for(i=0;i<row;i++){
            emty=0;
            for(j=col-1;j>=0;j--){
                flag=0;
                if(b[i][j].num!=0 ){
                    if(b[i][j+emty+1]){
                        if(b[i][j+emty+1].num==b[i][j].num){
                            b[i][j+1+emty].num*=2;
                            b[i][j].num=0;
                            khaali.push(b[i][j]);
                            flag=1;
                            score+=b[i][j+1+emty].num;
                            emty++;
                        }
                    }
                    if(emty!=0 && flag==0){
                        b[i][j+emty].num=b[i][j].num;
                        b[i][j].num=0;
                        rem(khaali,b,i,j+emty);
                        khaali.push(b[i][j]);
                    }
                }
                else
                    emty++;
            }
        }
 }
    else if(keyCode==37){//left
        for(i=0;i<row;i++){
            emty=0;
            for(j=0;j<col;j++){
                flag=0;
                if(b[i][j].num!=0){
                    if(b[i][j-emty-1]){
                       if(b[i][j-emty-1].num==b[i][j].num){
                            b[i][j-1-emty].num*=2;
                            b[i][j].num=0;
                            khaali.push(b[i][j]);
                            flag=1;
                            score+=b[i][j-1-emty].num;
                           emty++;
                        }
                    }
                    if(emty!=0 && flag==0){
                        b[i][j-emty].num=b[i][j].num;
                        b[i][j].num=0;
                        rem(khaali,b,i,j-emty);
                        khaali.push(b[i][j]);
                    }
                }
                else
                    emty++;
                
            }
        }

 }
    else if(keyCode==38){//up
        for(j=0;j<row;j++){
            emty=0;
            for(i=0;i<col;i++){
                flag=0;
                if(b[i][j].num!=0){
                    if(i-emty-1>-1){
                       if(b[i-emty-1][j].num==b[i][j].num){
                            b[i-1-emty][j].num*=2;
                            b[i][j].num=0;
                            khaali.push(b[i][j]);
                            flag=1;
                            score+=b[i-1-emty][j].num;
                            emty++;

                        }
                    }
                    if(emty!=0 && flag==0){
                        b[i-emty][j].num=b[i][j].num;
                        b[i][j].num=0;
                        rem(khaali,b,i-emty,j);
                        khaali.push(b[i][j]);
                    }
                }
                else
                    emty++;
                
            }
        }

 }
    else if(keyCode==40){//down
         for(j=0;j<row;j++){
            emty=0;
            for(i=col-1;i>=0;i--){
                flag=0;
                if(b[i][j].num!=0){
                    if(i+emty+1<4){
                       if(b[i+emty+1][j].num==b[i][j].num){
                            b[i+emty+1][j].num*=2;
                            b[i][j].num=0;
                            khaali.push(b[i][j]);
                            flag=1;
                            score+=b[i+emty+1][j].num;
                           emty++;
                        }
                    }
                    if(emty!=0 && flag==0){
                        b[i+emty][j].num=b[i][j].num;
                        b[i][j].num=0;
                        rem(khaali,b,i+emty,j);
                        khaali.push(b[i][j]);
                    }
                }
                else
                    emty++;
            }
        }
    }
    if(keyCode==37 || keyCode==38  || keyCode==39 ||keyCode==40){
        rand=random(khaali);
        if(!rand){
            over=1;
        }
        else
           {rem(khaali,b,rand.y,rand.x);
            rand.num=random([2,4]);
           }    
        
    }

 }
var m,pos;
function rem(a,b,i,j){
    for(m=0;m<a.length;m++){
        if(a[m]===b[i][j]){
            pos=m;
            break;
        }
    }
    a.splice(pos,1);
    
    
}
//    
