var body = document.querySelector("body");

var player = document.createElement("img");

body.appendChild(player);

player.className = "player" ;
player.setAttribute("src", "../img/player.png");

console.log(player);

body.addEventListener("mousemove", function (event) {
    var x = event.clientX ;
    var y = event.clientY ;
     player.style.left = x + "px";
     player.style.top = y + "px";
})


