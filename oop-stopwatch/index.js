function StopWatch() {
  let duration = 0;
  let started = false;
  let intervalID;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, "started", {
    get: function () {
      return started;
    },
    set: function (value) {
      started = value;
    },
  });
  Object.defineProperty(this, "intervalID", {
    get: function () {
      return intervalID;
    },
    set: function (value) {
      intervalID = value;
    },
  });
}

StopWatch.prototype.start = function () {
  if (this.started) throw new Error("The stopwatch has already started.");
  this.started = true;
  this.intervalID = setInterval(() => {
    ++this.duration;
  }, 1000);
};
StopWatch.prototype.stop = function () {
  if (!this.started) throw new Error("The stopwatch has already stopped.");
  this.started = false;
  clearInterval(this.intervalID);
};
StopWatch.prototype.reset = function () {
  if (this.started) throw new Error("Stop the stopwatch in order to reset.");
  this.duration = 0;
};
