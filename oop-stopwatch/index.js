function StopWatch() {
  let duration = 0;
  let started = false;
  let intervalID;
  this.start = function () {
    if (started) throw new Error("The stopwatch has already started.");
    started = true;
    intervalID = setInterval(() => {
      ++duration;
    }, 1000);
  };
  this.stop = function () {
    if (!started) throw new Error("The stopwatch has already stopped.");
    started = false;
    clearInterval(intervalID);
  };
  this.reset = function () {
    if (started) throw new Error("Stop the stopwatch in order to reset.");
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
