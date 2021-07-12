
var coor=[{x:3,y:4}];
var head=document.createElement("div");
var score=0;
head.classList.add("head");
document.querySelector(".score").innerHTML="Score : "+score;
document.getElementById("board").appendChild(head);

head.style.gridRowStart=coor[0].y;
head.style.gridColumnStart=coor[0].x;
var eve,dir={x:0,y:0};
var SbodyElements=[];

var food=document.createElement("div");
food.classList.add("food");
document.getElementById("board").appendChild(food);
function randomNum()
{
    var num1=Math.floor(Math.random()*18)+2;
    var num2=Math.floor(Math.random()*18)+2;
    for(var i=0;i<coor.length;i++)
    {
        if(num1==coor[i].x&&num2==coor[i].y)
        {
            num1=Math.floor(Math.random()*18)+2;
            num2=Math.floor(Math.random()*18)+2;
            i=-1;
        }
    }
    a=num1;b=num2;
}


var boundary=[];var k=0;
for(var i=1;i<=20;i++)
{
    for(var j=1;j<=20;j++)
    {
        if(i==1||i==20||j==1||j==20)
        {
            boundary[k]=document.createElement("div");
            boundary[k].classList.add("boundary");
            document.getElementById("board").appendChild(boundary[k]);
            boundary[k].style.gridRowStart=i;
            boundary[k].style.gridColumnStart=j;
        }
        

    }
}
randomNum();
food.style.gridRowStart=b;
food.style.gridColumnStart=a;

function collision()
{
    if(coor[0].x==1||coor[0].x==20||coor[0].y==1||coor[0].y==20)
    {
        document.getElementById("exit").style.display="block";
    }
    for(var i=1;i<coor.length;i++)
    {
        if(coor[0].x==coor[i].x&&coor[0].y==coor[i].y)
        document.getElementById("exit").style.display="block";
    }
}


document.addEventListener("keydown",function(event){
    eve=event.key;
    if(eve=="ArrowRight")
    {
        if(dir.x==-1)
        eve="ArrowLeft";
    }
    if(eve=="ArrowLeft")
    {
        if(dir.x==1)
        eve="ArrowRight";
    }
    if(eve=="ArrowUp")
    {
        if(dir.y==1)
        eve="ArrowDown";
    }
    if(eve=="ArrowDown")
    {
        if(dir.y==-1)
        eve="ArrowUp";
    }
    if(event.key=="ArrowUp")
    {
        if(!(dir.y==1||dir.y==-1))
        {
            var z=0;dir={x:0,y:-1};
        requestAnimationFrame(moveu);
        function moveu(time)
        {
            collision();
            if((coor[0].y>1)&&(eve=="ArrowUp"))
            {
                requestAnimationFrame(moveu);
                if((time-z)/1000<0.1)
                return;
                
                foodEaten();
                for(var i=coor.length-1;i>=1;i--)
                {
                    coor[i].x=coor[i-1].x;
                    coor[i].y=coor[i-1].y;
                }
                
                for(var i=coor.length-1;i>=1;i--)
                {
                    SbodyElements[i-1].style.gridColumnStart=coor[i].x;
                    SbodyElements[i-1].style.gridRowStart=coor[i].y;
                }
                coor[0].y--;
                head.style.gridRowStart=coor[0].y;

                z=time;
            }

        }
        }
          
    }
    if(event.key=="ArrowDown")
    {
        if(!(dir.y==1||dir.y==-1))
        {
            var z=0;dir={x:0,y:1};
        requestAnimationFrame(moved);
        function moved(time)
        {
            collision();
            if((coor[0].y<20)&&(eve=="ArrowDown"))
            {
                requestAnimationFrame(moved);
                if((time-z)/1000<0.1)
                return;
                
                foodEaten();
                for(var i=coor.length-1;i>=1;i--)
                {
                    coor[i].x=coor[i-1].x;
                    coor[i].y=coor[i-1].y;
                }
                
                for(var i=coor.length-1;i>=1;i--)
                {
                    SbodyElements[i-1].style.gridColumnStart=coor[i].x;
                    SbodyElements[i-1].style.gridRowStart=coor[i].y;
                }
                coor[0].y++;
                head.style.gridRowStart=coor[0].y;

                z=time;
            }
            
        }
        }
        

    }
    if(event.key=="ArrowLeft")
    {
        if(!(dir.x==-1||dir.x==1))
        {
            var z=0;dir={x:-1,y:0};
        requestAnimationFrame(movel);
        function movel(time)
        {
            collision();
            if((coor[0].x>1)&&(eve=="ArrowLeft"))
            {
                requestAnimationFrame(movel);
                if((time-z)/1000<0.1)
                return;
                
                foodEaten();
                for(var i=coor.length-1;i>=1;i--)
                {
                    coor[i].x=coor[i-1].x;
                    coor[i].y=coor[i-1].y;
                }
                
                for(var i=coor.length-1;i>=1;i--)
                {
                    SbodyElements[i-1].style.gridColumnStart=coor[i].x;
                    SbodyElements[i-1].style.gridRowStart=coor[i].y;
                }
                coor[0].x--;
                head.style.gridColumnStart=coor[0].x;

                z=time;
            }
            
        }
        }
        

    }
    
    if(event.key=="ArrowRight")
    {
        if(!(dir.x==1||dir.x==-1))
        {
            var z=0;
            dir={x:1,y:0};
        requestAnimationFrame(mover);
        function mover(time)
        {
            collision();
            if((coor[0].x<20)&&(eve=="ArrowRight"))
            {
                requestAnimationFrame(mover);
                if((time-z)/1000<0.1)
                return;
                
                foodEaten();
                
                for(var i=coor.length-1;i>=1;i--)
                {
                    coor[i].x=coor[i-1].x;
                    coor[i].y=coor[i-1].y;
                }
                
                for(var i=SbodyElements.length-1;i>=0;i--)
                {
                    SbodyElements[i].style.gridColumnStart=coor[i+1].x;
                    SbodyElements[i].style.gridRowStart=coor[i+1].y;
                }
                coor[0].x++;
                head.style.gridColumnStart=coor[0].x;
                z=time;
            }
            
        }
        }
        

    }

    function foodEaten(){
        if(((coor[0].x+dir.x==a)&&(coor[0].y+dir.y==b)))
        {
            score++;
            document.querySelector(".score").innerHTML="Score : "+score;
            coor.unshift({x:a,y:b});
            randomNum();
            food.style.gridColumnStart=a;
            food.style.gridRowStart=b;
            head.style.gridColumnStart=coor[0].x;
            head.style.gridRowStart=coor[0].y;
            var l=SbodyElements.length;
            SbodyElements[l]=document.createElement("div");
            SbodyElements[l].classList.add("Sbody");
            document.getElementById("board").appendChild(SbodyElements[l]);

        }
    }
    
    
});


