function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate degrees for each hand
    const secondsDegrees = (seconds / 60) * 360;
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6; // Minute hand moves slightly each second
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30; // Hour hand moves slightly each minute

    // Rotate hands to match current time
    document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock();