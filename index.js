// change navlink color
$(document).ready(function () {
  $("ul.navbar-nav > li").click(function (e) {
   $("ul.navbar-nav > li").removeClass("active");
   $(this).addClass("active");
    });
});

function like(){
  
document.getElementById("heart").src='unlike_prev_ui.png';

}

function unlike(){
  document.getElementById('heart').src='like_prev_ui.png';
  }
  function like1(){
  let count=0
document.getElementById("heart1").src='unlike_prev_ui.png';
count= count+1;
}

function unlike1(){
  document.getElementById('heart1').src='like_prev_ui.png';
  }
function like2(){

document.getElementById("heart2").src='unlike_prev_ui.png';

}

function unlike2(){
document.getElementById('heart2').src='like_prev_ui.png';
}
function like3(){

document.getElementById("heart3").src='unlike_prev_ui.png';

}

function unlike3(){
document.getElementById('heart3').src='like_prev_ui.png';
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
function explore(){
let date=document.getElementById('getdate').value;
document.getElementById('newdate').value=date; 
let count=document.getElementById('guest').value;
document.getElementById('guestcount').value=count;
let loc=document.getElementById('getLocation').value;
console.log(loc);
document.getElementById('locate').value=loc;
}  
     
              
              
  
  