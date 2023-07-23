// change navlink color
$(document).ready(function () {
  $("ul.navbar-nav > li").click(function (e) {
    $("ul.navbar-nav > li").removeClass("active");
    $(this).addClass("active");
  });
});

function like() {

  let a = document.querySelector("#slide1")

}

function unlike() {
  document.getElementById('heart').src = 'like_prev_ui.png';
}
function like1() {
  let count = 0
  document.getElementById("heart1").src = 'unlike_prev_ui.png';
  count = count + 1;
}

function unlike1() {
  document.getElementById('heart1').src = 'like_prev_ui.png';
}
function like2() {

  document.getElementById("heart2").src = 'unlike_prev_ui.png';
}

function unlike2() {
  document.getElementById('heart2').src = 'like_prev_ui.png';
}
function like3() {

  document.getElementById("heart3").src = 'unlike_prev_ui.png';

}

function unlike3() {
  document.getElementById('heart3').src = 'like_prev_ui.png';
}
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function on1() {
  document.getElementById("overlay1").style.display = "block";
}

function off1() {
  document.getElementById("overlay1").style.display = "none";
}
function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off2() {
  document.getElementById("overlay2").style.display = "none";
}
function explore() {
  let date = document.getElementById('getdate').value;
  document.getElementById('newdate').value = date;
  let count = document.getElementById('guest').value;
  document.getElementById('guestcount').value = count;
  let loc = document.getElementById('getLocation').value;
  console.log(loc);
  document.getElementById('locate').value = loc;
}

var clickCount = 0;
countClick = () => {
  let darkMode = document.getElementById("themebtn");
  clickCount++;
  return clickCount;
}
darkModeToggle = () => {
  var count = countClick();
  console.log(count);
  var icon = document.getElementById("icon");
  if (count % 2 == 1) {
    var darkMode = document.getElementById("darkMode");
    var elite = document.getElementById("elite");
    var elite1 = document.getElementById("elite1");
    var elite2 = document.getElementById("elite2");
    var nav = document.getElementById("navbar");;
    var body = document.body;
    var cname = document.getElementById("clientName");
    var email = document.getElementById("email");
    var service = document.getElementById("service");
    var number = document.getElementById("number");
    var msg = document.getElementById("msg");
    nav.classList.remove('bg-light');
    nav.classList.remove('navbar-light');
    nav.classList.add('bg-dark');
    nav.classList.add('navbar-dark');
    msg.style.backgroundColor = "#212529";
    cname.style.backgroundColor = "#212529";
    email.style.backgroundColor = "#212529";
    number.style.backgroundColor = "#212529";
    service.style.backgroundColor = "#212529";
    icon.className = "fa-solid fa-sun";
    icon.style.transform = "translateX(120%)"
    console.log(icon.className);
    // document.getElementById('themebtn').innerHTML="Light mode";
    document.getElementById("contactform").style.backgroundColor = "#212529";
    body.style.backgroundColor = "#212529";
    elite.style.backgroundColor = "#212529";
    elite1.style.backgroundColor = "#212529";
    elite2.style.backgroundColor = "#212529";
  }
  if (count % 2 == 0 && count > 1) {
    // var darkMode = document.getElementById("darkMode");
    var body = document.body;
    var elite = document.getElementById("elite");
    var elite1 = document.getElementById("elite1");
    var elite2 = document.getElementById("elite2");
    // var icon1 = document.getElementById("icon");
    var nav = document.getElementById("navbar");;
    var cname = document.getElementById("clientName");
    var email = document.getElementById("email");
    var service = document.getElementById("service");
    var number = document.getElementById("number");
    var msg = document.getElementById("msg");
    nav.classList.remove('bg-dark');
    nav.classList.remove('navbar-dark');
    nav.classList.add('bg-light');
    nav.classList.add('navbar-light');
    msg.style.backgroundColor = "#ffff";
    cname.style.backgroundColor = "#ffff";
    email.style.backgroundColor = "#ffff";
    number.style.backgroundColor = "#ffff";
    service.style.backgroundColor = "#ffff";
    icon.className = "fa-solid fa-moon"
    icon.style.transition = ".2s ease-in"
    icon.style.translate = "translateX(50%)"
    document.getElementById("contactform").style.backgroundColor = "white";
    body.style.backgroundColor = "white";
    elite.style.backgroundColor = "white";
    elite1.style.backgroundColor = "white";
    elite2.style.backgroundColor = "white";
  }
}

