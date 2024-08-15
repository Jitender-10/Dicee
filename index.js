var num = Math.floor(Math.random()*6 + 1);

var gum = Math.floor(Math.random()*6 + 1);

document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+ num +".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+ gum + ".png");

if(num>gum) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}

else if(num<gum) {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins";

}

else {
    document.querySelector("h1").innerHTML = "Draw";
}