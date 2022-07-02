var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
var randomimage1="dice"+randomNumber1+".png";
var randomimage2="dice"+randomNumber2+".png";
var image1= document.querySelectorAll("img")[0].setAttribute("src",randomimage1);
var image1= document.querySelectorAll("img")[1].setAttribute("src",randomimage2);
if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="Match Draw";
}
else {
  document.querySelector("h1").innerHTML="Player2 wins";
}
