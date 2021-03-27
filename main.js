//get startBtn
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
// set countdown timer
let elapsedTime = 0;
//get time div
document.getElementById("time").textContent = elapsedTime;

//define Btn
const pushStartBtn = startBtn.addEventListener("click", () => {
  console.log("start clicked");
  //setInterval
  const timerId = setInterval(function () {
    console.log("time");
    elapsedTime++;
    document.getElementById("time").textContent = elapsedTime;
    //stop timer
    stopBtn.addEventListener("click", () => {
      console.log("stop clicked");
      clearInterval(timerId);
    });
  }, 1000);
});

//set reset btn
const pushResetBtn = resetBtn.addEventListener("click", () => {
  console.log("reset clicked");
  elapsedTime = 0;
  document.getElementById("time").textContent = elapsedTime;
});
