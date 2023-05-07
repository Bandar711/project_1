var countDownDate = new Date("Apr 2, 2023 14:40:25").getTime();

var x = setInterval(function() {
    var counter = document.querySelector("#countdown");
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  counter.innerHTML = days + " day " + hours + " hour "
  + minutes + " min " + seconds + " sec ";

  if (distance < 0) {
    clearInterval(x);
    counter.innerHTML = "TIME aa";
  }
}, 1000);