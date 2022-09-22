let secondhand= document.getElementsByClassName('sec-hand')[0];
let minutehand= document.getElementsByClassName('min-hand')[0];
let hourhand= document.getElementsByClassName('hour-hand')[0];
function time(){
    let date=new Date();
    let sec = date.getSeconds();
    let secondsdegree = ((sec/60)*360) + 90;
    secondhand.style.transform = `rotate(${secondsdegree}deg)`;

    let min = date.getMinutes();
    let minutesdegree = ((min/60)*360) + 90;
    minutehand.style.transform = `rotate(${minutesdegree}deg)`;

    let hr = date.getHours();
    let hoursdegree = ((hr/12)*360) + 90;
    hourhand.style.transform = `rotate(${hoursdegree}deg)`;

    function digitaltime(){
        if(hr<10){
            hrs = "0"+hrs;
        }
        if(min<10){
            min = "0"+min;
        }
        if(sec<10){
            sec = "0"+sec;
        }
        let span=document.querySelector('.text');
        span.innerHTML=`${hr}:${min}:${sec}`;
    }
    digitaltime();
}

setInterval(time,1000);