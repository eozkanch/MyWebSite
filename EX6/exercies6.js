

const startingMinutes=10;
let time=startingMinutes*60;

const countdownEl=document.getElementById('countdown');


setInterval (updateCountdown,1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownEl.innerHTML=`${minutes} : ${seconds}`;   time--;
}


var i=0;

var images= ["/images/4.jpg","/images/5.jpg","/images/6.jpg","/images/7.jpg","/images/7.jpg","/images/8.jpg"];
var duration=2000;
function slideImg(){

    document.slide.src=images[i];

    if(i<images.length-1){
        i++;

    }
    else
    {
        
    i=0;
    }
    setTimeout("slideImg()",duration);
}

window.onload=slideImg;
   


