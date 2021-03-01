var body = document.querySelector("body");

var wrap = document.createElement("div");

var para = document.createElement("div");


var forma = document.createElement("div");

var input = document.createElement("input");

var button = document.createElement("button");

var count = 0;

body.appendChild(wrap);

wrap.appendChild(para);
wrap.appendChild(forma);



forma.appendChild(input);
forma.appendChild(button);


wrap.className = "wrap" ;
para.className = "para" ;
forma.className = "forma" ;

button.textContent= "SEND ";

input.setAttribute("type", "text")

button.addEventListener( "click", function () {
    count++;
    var play = document.createElement("p");  
    play.textContent = input.value;
    input.value = "";
    para.appendChild(play);

    if(count === 3) {
       para.innerHTML = "";
       count = 0;
    }
  
})