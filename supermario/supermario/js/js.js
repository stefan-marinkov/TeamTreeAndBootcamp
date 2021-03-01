var body = document.querySelector("body");
var button = document.createElement("button");

body.appendChild(button);

button.className = "butt";

button.textContent = "PROMENI BOJU POZADINE";

button.setAttribute= "onclick" ;


button.onclick = function() {
    body.style.backgroundColor = "blue";
}