function game(){
var randomNumber1=Math.floor(Math.random()*6+1);
var randomDice= "dice"+randomNumber1+".jpg";
var image1 =document.getElementById("img1");
image1.setAttribute("src",randomDice);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomDice2= "dice"+randomNumber2+".jpg";
var image2 =document.getElementById("img2");
image2.setAttribute("src",randomDice2);

if (randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins🏆";

}
else if (randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2 wins🏆";
}
else{
    document.querySelector("h1").innerHTML="Game draw";   
}
}
 var button =document.querySelector("button")
 button.addEventListener("click",game);