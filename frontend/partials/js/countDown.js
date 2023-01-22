// Getting Output Fields
const dayss = document.querySelector('.days');
const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result
  dayss.innerHTML = days;
  hrs.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    dayss.innerHTML = "0";
    hrs.innerHTML = "0";
    min.innerHTML = "0";
    sec.innerHTML = "0";
  }
}, 1000);