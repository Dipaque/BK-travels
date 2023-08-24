

// change navlink color
$(document).ready(function () {
  $("ul.navbar-nav > li").click(function (e) {
    $("ul.navbar-nav > li").removeClass("active");
    $(this).addClass("active");
  });
});



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
  let loc = document.getElementById('getLoc').
  console.log(loc);
  document.getElementById('locate').value = loc;
}

let tourName=document.getElementById("summa");
console.log(tourName)

var clickCount = 0;
countClick = () => {
  let darkMode = document.getElementById("themebtn");
  clickCount++;
  return clickCount;
}
// darkModeToggle = () => {
//   var count = countClick();
//   console.log(count);
//   var icon = document.getElementById("icon");
//   if (count % 2 == 1) {
//     var booking=document.getElementById('booking');
//     var elite = document.getElementById("elite");
//     var elite1 = document.getElementById("elite1");
//     var elite2 = document.getElementById("elite2");
//     var nav = document.getElementById("navbar");
//     var body = document.body;
//     var cname = document.getElementById("clientName");
//     var email = document.getElementById("email");
//     var service = document.getElementById("service");
//     var number = document.getElementById("number");
//     var msg = document.getElementById("msg");
//     nav.classList.remove('bg-light');
//     nav.classList.remove('navbar-light');
//     nav.classList.add('bg-dark');
//     nav.classList.add('navbar-dark');
//     msg.style.backgroundColor = "#212529";
//     cname.style.backgroundColor = "#212529";
//     email.style.backgroundColor = "#212529";
//     number.style.backgroundColor = "#212529";
//     service.style.backgroundColor = "#212529";
//     icon.className = "fa-solid fa-sun";
//     icon.style.color="#ffff";
//     icon.style.transform = "translateX(120%)"
//     booking.style.backgroundColor="#212529";
//     document.getElementsByClassName("cabbooking")[0].style.backgroundColor="#212529"
//     document.getElementsByClassName("cabbooking")[1].style.backgroundColor="#212529"
//     document.getElementsByClassName("cabbooking")[2].style.backgroundColor="#212529"
//     document.getElementById("contactform").style.backgroundColor = "#212529";
//     document.getElementById("contactform").style.borderColor = "grey";
//     body.style.backgroundColor = "#212529";
//     document.getElementById('cabname').style.backgroundColor="#212529";
//     document.getElementById('cabnum').style.backgroundColor="#212529";
//     document.getElementById('cabtime').style.backgroundColor="#212529";
//     document.getElementById('cabdep').style.backgroundColor="#212529";
//     document.getElementById('cabdes').style.backgroundColor="#212529";
//     document.getElementById('cabchoice').style.backgroundColor="#212529";
//     document.getElementById('camname').style.backgroundColor="#212529";
//     document.getElementById('camnum').style.backgroundColor="#212529";
//     document.getElementById('cammodel').style.backgroundColor="#212529";
//     document.getElementById('camvariant').style.backgroundColor="#212529";
//     document.getElementById('camtime').style.backgroundColor="#212529";
//     document.getElementById('camlens').style.backgroundColor="#212529";
//     document.getElementById('aname').style.backgroundColor="#212529";
//     document.getElementById('anum').style.backgroundColor="#212529";
//     document.getElementById('acac').style.backgroundColor="#212529";
//     document.getElementById('atype').style.backgroundColor="#212529";
//     document.getElementById('aguest').style.backgroundColor="#212529";
//     document.getElementById('aloc').style.backgroundColor="#212529";
//     document.getElementById("booking1").style.backgroundColor="#212529";
//     document.getElementById("booking2").style.backgroundColor="#212529";
//     document.getElementById("cabBookingImg").src="cabBookingdark.png";
//     elite.style.borderColor = "grey";
//     elite1.style.borderColor = "grey";
//     elite2.style.borderColor = "grey";
//     elite.style.backgroundColor = "#212529";
//     elite1.style.backgroundColor = "#212529";
//     elite2.style.backgroundColor = "#212529";
//   }
//   if (count % 2 == 0 && count > 1) {
//     // var darkMode = document.getElementById("darkMode");
//     var body = document.body;
//     var elite = document.getElementById("elite");
//     var elite1 = document.getElementById("elite1");
//     var elite2 = document.getElementById("elite2");
//     // var icon1 = document.getElementById("icon");
//     var nav = document.getElementById("navbar");;
//     var cname = document.getElementById("clientName");
//     var email = document.getElementById("email");
//     var service = document.getElementById("service");
//     var number = document.getElementById("number");
//     var msg = document.getElementById("msg");
//     nav.classList.remove('bg-dark');
//     nav.classList.remove('navbar-dark');
//     nav.classList.add('bg-light');
//     nav.classList.add('navbar-light');
//     msg.style.backgroundColor = "#ffff";
//     cname.style.backgroundColor = "#ffff";
//     email.style.backgroundColor = "#ffff";
//     number.style.backgroundColor = "#ffff";
//     service.style.backgroundColor = "#ffff";
//     icon.className = "fa-solid fa-moon"
//     icon.style.color="grey";
//     icon.style.transition = ".5s ease-in"
//     icon.style.transform = "translateX(65%)"
//     document.getElementById('cabname').style.backgroundColor="#ffff";
//     document.getElementById('cabnum').style.backgroundColor="#ffff";
//     document.getElementById('cabtime').style.backgroundColor="#ffff";
//     document.getElementById('cabdep').style.backgroundColor="#ffff";
//     document.getElementById('cabdes').style.backgroundColor="#ffff";
//     document.getElementById('cabchoice').style.backgroundColor="#ffff";
//     document.getElementById("booking").style.backgroundColor="#ffff";
//     document.getElementById("booking1").style.backgroundColor="#ffff";
//     document.getElementById("booking2").style.backgroundColor="#ffff";
//     document.getElementById('aname').style.backgroundColor="#ffff";
//     document.getElementById('anum').style.backgroundColor="#ffff";
//     document.getElementById('acac').style.backgroundColor="#ffff";
//     document.getElementById('atype').style.backgroundColor="#ffff";
//     document.getElementById('aguest').style.backgroundColor="#ffff";
//     document.getElementById('aloc').style.backgroundColor="#ffff";
//     document.getElementById('camname').style.backgroundColor="#ffff";
//     document.getElementById('camnum').style.backgroundColor="#ffff";
//     document.getElementById('cammodel').style.backgroundColor="#ffff";
//     document.getElementById('camvariant').style.backgroundColor="#ffff";
//     document.getElementById('camtime').style.backgroundColor="#ffff";
//     document.getElementById('camlens').style.backgroundColor="#ffff";
//     document.getElementsByClassName("cabbooking")[0].style.backgroundColor="#ffff"
//     document.getElementsByClassName("cabbooking")[1].style.backgroundColor="#ffff"
//     document.getElementsByClassName("cabbooking")[2].style.backgroundColor="#ffff"
//     document.getElementById("contactform").style.backgroundColor = "white";
//     document.getElementById("contactform").style.borderColor = "lightgrey";
//     document.getElementById("cabBookingImg").src="3682361.jpg";
//     body.style.backgroundColor = "#ffff";
//     elite.style.borderColor = "#f4f4f6";
//     elite1.style.borderColor = "#f4f4f6";
//     elite2.style.borderColor = "#f4f4f6";
//     elite.style.backgroundColor = "#f4f4f6";
//     elite1.style.backgroundColor = "#f4f4f6";
//     elite2.style.backgroundColor = "#f4f4f6";
//   }
// }
