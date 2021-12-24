setInterval(() => {
    date = new Date();
    hourtime = date.getHours();
    minutetime = date.getMinutes();
    secondtime = date.getSeconds();
    hourrotate = 30 * hourtime + minutetime / 2;
    minuterotate = 6 * minutetime;
    secondrotate = 6 * secondtime;
    hour.style.transform = `rotate(${hourrotate}deg)`;
    minute.style.transform = `rotate(${minuterotate}deg)`;
    second.style.transform = `rotate(${secondrotate}deg)`;
}, 1000);