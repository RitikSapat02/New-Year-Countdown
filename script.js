dayEL = document.querySelector('#day')
hourEL = document.querySelector('#hour')
minuteEL = document.querySelector('#minute')
secondEL = document.querySelector('#second')


const newYearTimestamp = new Date('Jan 1,2024 00:00:00').getTime()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTimestamp - now;
    console.log(gap)
    // note gap is in milliseconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day)/hour);
    const m = Math.floor((gap%hour)/minute);
    const s = Math.floor((gap%minute)/second);

    dayEL.innerText = d;
    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;
    setTimeout(updateCountdown,1000)
}
updateCountdown()