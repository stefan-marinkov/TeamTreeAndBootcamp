var body = document.querySelector("body");

var audio = document.createElement("audio");
var source = document.createElement("source");

var divGame = document.createElement("div");

var play = document.createElement("div");

var count = 0;

body.appendChild(divGame);

body.appendChild(audio);
audio.appendChild(source);
audio.setAttribute("autoplay", true);
source.setAttribute("src", "../music/superMario.mp3");

divGame.appendChild(play);


divGame.className = "game";
play.className = "play";


body.addEventListener("keypress", function (event) {
    if (event.keyCode === 100) {
        count = count - 3;
        play.style.backgroundImage = "url(../img/mariorunning.gif)";
        setInterval(function () {
            divGame.style.backgroundPositionX = count + "px";
        }, 1);
    }
})

body.addEventListener("keyup", function (event) {

    if (event.keyCode === 68) {
        play.style.backgroundImage = "url(../img/mariostatic.png)";

    }
})


body.addEventListener("keypress", function (event) {

    if (event.keyCode === 97) {
        count = count + 3;
        play.style.backgroundImage = "url(../img/mariorunning.gif)";
        play.style.transform = "rotateY(180deg)"
        setInterval(function () {
            divGame.style.backgroundPositionX = count + "px";
        }, 100);
    }


})

body.addEventListener("keyup", function (event) {

    if (event.keyCode === 65) {
        play.style.backgroundImage = "url(../img/mariostatic.png)";
        play.style.transform = "rotateY(360deg)"

    }

})


body.addEventListener("keypress", function (event) {

    if (event.keyCode === 119) {
        console.log(event.keyCode);
        play.style.backgroundImage = "url(../img/mariorunning.gif)";
        play.style.top = "50px";
        play.style.transitionDuration = "1s";
    }

})

body.addEventListener("keyup", function (event) {

    if (event.keyCode === 87) {
        console.log(event.keyCode);
        play.style.backgroundImage = "url(../img/mariostatic.png)";
        play.style.top = "350px";
        play.style.transitionDuration = "3s";
    }

})
