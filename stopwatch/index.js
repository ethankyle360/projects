let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

// Add listener when I click start
document.getElementById('startTimer').addEventListener('click', ()=>{
    if (int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10); // run displayTimer every 10 ms
});
// Add listener when I click pause
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});
// Add listener when I click reset
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

// Display Timer
function displayTimer() 
{
    milliseconds += 10;

    if(milliseconds == 1000)
    {
        milliseconds = 0;
        seconds++;
        if(seconds == 60)
        {
            seconds = 0;
            minutes++;
            if(minutes == 60)
            {
                minutes = 0;
                hours++;
            }
        }
    }

    // Set values
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `;
}