var feild = document.getElementById("feild");
var ball = document.getElementById('ball');


feild.addEventListener('mousemove',(e)=>{ 
    const x = e.clientX;
    const y = e.clientY;

    console.log(x,y);


    ball.style.left=x+'px';
    ball.style.top=y+'px';
    
})