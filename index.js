var n1= Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;
var diceimg1="dice"+n1+".png";
var dicesrc1="./images/"+diceimg1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dicesrc1);



var n2= Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;
var diceimg2="dice"+n2+".png";
var dicesrc2="./images/"+diceimg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dicesrc2);




if(n1>n2){
    document.querySelector("h1").innerHTML="Player 1  wins!🚩 "
}
else if(n1<n2){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩 "
}
else{
    document.querySelector("h1").innerHTML="Draw Match "
}