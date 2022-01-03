setInterval(() => {
    date = new Date();
    hourTime = date.getHours();
    minuteTime = date.getMinutes();
    secondTime = date.getSeconds();
    hourRotate = 30 * hourTime + minuteTime / 2;
    minuteRotate = 6 * minuteTime;
    secondRotate = 6 * secondTime;
    hour.style.transform = `rotate(${hourRotate}deg)`;
    minute.style.transform = `rotate(${minuteRotate}deg)`;
    second.style.transform = `rotate(${secondRotate}deg)`;
}, 1000);