











//prevents the clock from being sped up unnecessarily
var clockRunning = false;
var Timer = {
  time: 0,
  

reset: function() {
   Timer = 60;
    $("#display").text("60:00");
    },



  start: function() {
    if (!clockRunning) {
        intervalId = setInterval(Timer.count, 1000);
        clockRunning = true;
    }
  },

  count: function() {
    timer--;
    $("#display").text(converted);
    },
 

  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
