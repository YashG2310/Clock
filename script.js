let time = setInterval(() => {
    let a = new Date();
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();

    document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
}, 1000)