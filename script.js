function updateClock() {
  const now = new Date();
  const second = now.getSeconds() * 6;
  const minute = now.getMinutes() * 6;
  const hour = ((now.getHours() % 12) / 12) * 360 + (minute / 12);

  document.querySelector('.second').style.transform = `rotate(${second}deg) translateX(-50%)`;
  document.querySelector('.minute').style.transform = `rotate(${minute}deg) translateX(-50%)`;
  document.querySelector('.hour').style.transform = `rotate(${hour}deg) translateX(-50%)`;
}

setInterval(updateClock, 1000);
updateClock();