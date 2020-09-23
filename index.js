var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice-" + randomNumber1 + ".png";
var randomImage2 = "dice-" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNumber1 === randomNumber2){
	document.querySelector("h1").innerHTML = "Refresh again";
}
else{
	document.querySelector("h1").innerHTML = "Player2 wins";
}
