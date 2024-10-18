// Write JavaScript code here
let interval;
let secs = 0;
let mins = 0;
let hrs = 0;
let count = 0;
let isRunning = false; // is Running starts false 

const startStopButton = document.getElementById('startStop');
startStopButton.addEventListener('click', () => {
    
    isRunning = !isRunning // on click, system is running (isRunning = True)
    
    if (isRunning) { // isRunning = true
        startStopButton.textContent = 'Stop';
        interval = setInterval(updateTime, 1000)
        
    } else { // isRunning = false
        startStopButton.textContent = 'Start';
        clearInterval(interval)
        
    }
    
});

function updateTime() {
    count+=1;
    secs = Math.floor(count % 60);
    mins = Math.floor((count/60) % 60);
    hrs = Math.floor((count/(60*60))% 60);

    // alternate math calculations
    // const hours = Math.floor(totalSeconds / 3600);
    // const minutes = Math.floor((totalSeconds % 3600) / 60);
    // const seconds = totalSeconds % 60;

    const stopWatch = document.getElementById('stopwatch');

    secs = pad(secs)
    mins = pad(mins)
    hrs = pad(hrs)

    stopWatch.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        unit = ((unit).toString())
        if (unit.length == 2) {
            return unit
        } else {
            return ("0" + unit)
        }
    }
}

// alternate pad: 
// function pad(number) {
//     return number < 10 ? '0' + number : number; }

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    clearInterval(interval)
    startStopButton.textContent = 'Start';
    isRunning = false;
    count = 0;
    const stopWatch = document.getElementById('stopwatch');
    stopWatch.textContent = `00:00:00`;
});


