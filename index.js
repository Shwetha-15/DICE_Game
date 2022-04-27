//Random 1-6
//Player - 1

var randomNum1 = Math.floor(Math.random() * 6) + 1;

//Mapping random to images in folder
var randomImage1 = "images/dice" + randomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

//Player - 2

var randomNum2 = Math.floor(Math.random() * 6) + 1;

//Mapping random to images in folder
var randomImage2 = "images/dice" + randomNum2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

//Main Logic - decide who is winner

if(randomNum1 > randomNum2)
{
   document.querySelector("h1").innerHTML = "Player 1 wins !";
}
else if(randomNum2 > randomNum1)
{
   document.querySelector("h1").innerHTML = "Player 2 wins !";
}
else
{
  document.querySelector("h1").innerHTML = "Draw !";
}
