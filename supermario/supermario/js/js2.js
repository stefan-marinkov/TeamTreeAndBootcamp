var body = document.querySelector("body");
var button = document.createElement("button");
var button2 = document.createElement("button");

body.appendChild(button);
body.appendChild(button2);

button.className ="bt";
button2.className = "bt2";

button.textContent = "PROMENI BOJE POZADINE";
button2.textContent = "ISKLJUCI PREKIDAC";

body.className = "green";
button.setAttribute = "onclick";
button2.setAttribute = "onclick";

var bool = true;

button.onclick = function() {

    body.classList.toggle("green");
  };


button2.onclick = function () {
        button.onclick = null;
        
}