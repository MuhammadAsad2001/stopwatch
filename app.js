
var min = 0;
var sec = 0;
var millisec = 0;
var minh = document.getElementById("min")
var sech = document.getElementById("sec")
var millih = document.getElementById("millisec")
var interval;

function timer(){
    millisec++
    millih.innerHTML = millisec;
    if(millisec >= 100){
        sec++
        sech.innerHTML = sec
        millisec = 0;
    }else if(sec >=60){
        min++
        minh.innerHTML = min
        sec = 0
    }
} 
function start(){
    interval = setInterval(timer,10)
}

function stop(){
   clearInterval(interval) 
}

function reset(){
    min = 0;
    sec = 0;
    millisec = 0;
    minh.innerHTML = min
    sech.innerHTML = sec
    millih.innerHTML = millisec
    stop()
}