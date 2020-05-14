// let minuTime = document.querySelector(".screen.mini.first").textContent;
// let screenTime = document.querySelector("#time").textContent;
// let myVar;


// function startTimer(duration, display) {
//   screenTime = document.querySelector("#time").textContent;
//   var timer = duration, minutes, seconds;
//   myVar = setInterval(function () {
//       minutes = parseInt(timer / 60, 10);
//       seconds = parseInt(timer % 60, 10);
//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;
//       display.textContent = minutes + ":" + seconds;
//       if (--timer < 0) {
//           timer = duration;
//       }
//   }, 1000);
// }


// //iconrow functionality
// document.getElementById("start").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(screenTime);
//   var chosenMinutes = 60 * parseInt(screenTime),
//   display = document.querySelector('#time');
//   startTimer(chosenMinutes, display);
// });

// document.getElementById("pause").addEventListener("click", (e) => {
//   e.preventDefault();
//   clearInterval(myVar);
// });




var audioStart = new Audio("/sounds/tom.wav");
var audioBreak = new Audio('/sounds/snare.wav');


// Start with an initial value presented in "minutes" screen x60.
let mins = document.querySelector(".screen.mini.first").textContent;
let TIME_LIMIT = parseInt(mins*60);

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;


let timerInterval = null;

function formatTime(timeLeft) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  let minutes = Math.floor(timeLeft / 60);
  // Seconds are the remainder of the time divided by 60 (modulus operator).
  let seconds = timeLeft % 60;
  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

document.getElementById("time").innerHTML = `${formatTime(timeLeft)}`


function startTimer() {
  audioStart.play();
  document.getElementById("time").innerHTML = `${formatTime(timeLeft)}`
  mins = document.querySelector(".screen.mini.first").textContent;
  TIME_LIMIT = parseInt(mins*60);
  timePassed = 0;
  timerInterval = setInterval(() => {
    
    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    
    // The time left label is updated
    document.getElementById("time").innerHTML = formatTime(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      startBreak();
    }
  }, 1000);
}

function startBreak() {
  audioBreak.play();
  document.getElementById("time").innerHTML = `b ${formatTime(timeLeft)}`
  mins = document.querySelector(".screen.mini.second").textContent;
  TIME_LIMIT = parseInt(mins)*60;
  timePassed = 0;
  breakInterval = setInterval(() => {
    
    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    
    // The time left label is updated
    document.getElementById("time").innerHTML = `b ${formatTime(timeLeft)}`

    if (timeLeft === 0) {
      clearInterval(breakInterval);
      startTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  mins = document.querySelector(".screen.mini.first").textContent;
  TIME_LIMIT = parseInt(mins*60);
  document.getElementById("time").innerHTML = `${formatTime(timeLeft)}`
}

function onTimesUp() {
  clearInterval(timerInterval);
}

function refreshTimer() {
  clearInterval(timerInterval);
  document.querySelector(".screen.mini.first").innerHTML = "25";
  document.querySelector(".screen.mini.second").innerHTML = "5";
  mins = document.querySelector(".screen.mini.first").innerHTML;
  TIME_LIMIT = parseInt(mins*60);
  timePassed = 0;
  timeLeft = TIME_LIMIT;  
  document.getElementById("time").innerHTML = `${formatTime(timeLeft)}`

}


//iconrow functionality
document.getElementById("start").addEventListener("click", (e) => {
  e.preventDefault();
  startTimer();
});

document.getElementById("pause").addEventListener("click", (e) => {
  e.preventDefault();
  onTimesUp();
});

document.getElementById("stop").addEventListener("click", (e) => {
  e.preventDefault();
  stopTimer();
});

document.getElementById("refresh").addEventListener("click", (e) => {
  e.preventDefault();
  refreshTimer();
});





//minutes and break row functionality
document.getElementById("minutesBack").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".screen.mini.first").innerHTML -= 1 
});
document.getElementById("breakForward").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".screen.mini.first").innerHTML = parseInt(document.querySelector(".screen.mini.first").innerHTML) + 1 
});
document.getElementById("breakBack").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".screen.mini.second").innerHTML -= 1 
});
document.getElementById("minutesForward").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".screen.mini.second").innerHTML = parseInt(document.querySelector(".screen.mini.second").innerHTML) + 1 
});


