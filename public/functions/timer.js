const startTime = new Date().getTime();

export function startTimer() {
  var currentTime = new Date().getTime();
  var elapsedTime = Math.floor((currentTime - startTime) / 1000);
  setInterval(updateTime(currentTime, elapsedTime), 1000);

  return elapsedTime;
}

function updateTime(currentTime, elapsedTime) {
  currentTime = new Date().getTime();
  elapsedTime = Math.floor((currentTime - startTime) / 1000);
}

export function stopTimer(elapsedTime) {
  clearInterval(updateTime);
  var minutes = Math.floor(elapsedTime / 60);
  var seconds = elapsedTime % 60;

  minutes < 10 ? minutes = "0" + minutes : false;
  seconds < 10 ? seconds = "0" + seconds : false;

  let time = minutes + ':' + seconds;
  return time;
}
