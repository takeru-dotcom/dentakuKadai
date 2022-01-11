let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop  = document.getElementById("stop");
let reset = document.getElementById("reset");

let seconds = 0;
let milliSeconds = 0;
let minute = 0;
let timerId;


let newSeconds = 0;
let newMilliSeconds = 0;
let newMinute = 0;

function stopWatch(){
  milliSeconds++;
  if(milliSeconds / 100 === 1){
    seconds++;
    milliSeconds = 0;
  }
  if(milliSeconds < 10){
    newMilliSeconds = "0" + milliSeconds;
  }else{
    newMilliSeconds = milliSeconds;
  }
  if(seconds < 10){
    newSeconds = "0" + seconds;
  }else{
    newSeconds = seconds;
  }
  if(seconds / 60 === 1){
  	minute++;
  	seconds = "0";
  }
  if(minute < 10){
  	newMinute = "0" + minute;
  }else{
  newMinute = minute;
  }
timer.textContent = newMinute + ":" + newSeconds + "." + newMilliSeconds;
}

  reset.disabled = true;
	reset.style.color = "White";	
	stop.disabled = true;
	stop.style.color = "White";

function clickBtn1(){
(start.disabled)
		start.disabled = true;
		start.style.color = "White";
		reset.disabled = false;
		reset.style.color = "White";
		stop.disabled = false;
		stop.style.color = "black";
		timerId = setInterval( stopWatch ,10);
		}
		
function clickBtn2(){
(stop.disabled)
		stop.disabled=true;
		stop.style.color = "White";
		start.disabled = false;
		start.style.color = "black";
		reset.disabled = false;
		reset.style.color = "black";
		clearInterval(timerId);
		}
		
function clickBtn3(){
(reset.disabled);
		reset.disabled = true;
		reset.style.color = "White";
		stop.disabled = true;
		stop.style.color = "White";
		start.disabled = false;
		start.style.color = "black";
		timer.textContent = "00:00.00"
		seconds = 0;
		milliSeconds = 0;
		minute = 0;
		}
