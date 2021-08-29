const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTime;
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnPlay)) {
            clockTime = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
            d.querySelector(btnStop).disabled = false
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTime);
            d.querySelector(clock).innerHTML = null;
            e.target.disabled = true
            d.querySelector(btnPlay).disabled = false;
        }
    })

} 
export function alarm( btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = d.createElement('audio');
    $alarm.src = 'assets/alarm.mp3'

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play()
            }, 1000);
            e.target.disabled = true; 
            d.querySelector(btnStop).disabled = false
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo);
            $alarm.pause();
            e.target.disabled = true;
            d.querySelector(btnPlay).disabled = false;
            $alarm.curentTime = 0;
        }
    })

}