// DROPDOWN 

var section = document.querySelector(".shows");
var search = document.querySelector(".search");
var btn = document.querySelector(".btn");
var drop = document.querySelector(".dropDownMenu");

function filmLinks(down) {
    var linkTitle = document.createElement("p");
    linkTitle.className = "pointer"
    drop.appendChild(linkTitle);
    drop.style.visibility = "visible";

    linkTitle.textContent = down.show.name;
    linkTitle.addEventListener('click', function () {
        localStorage.setItem("informationPage", down.show.id);
        location.href = "../page.html";
        // if("click" != linkTitle)
        //  drop.style.display = "none";
        
    })
}

function dropDownFilmList(drops) {
    drop.innerHTML = "";
    for (var i = 0; i < 5; i++) {
        filmLinks(drops[i])
    }
}



function dropDownLinks() {
    var request = new XMLHttpRequest();
    var baseUrl = "http://api.tvmaze.com/search/shows?q=";
    request.open('GET', baseUrl + search.value);

    request.onload = function () {
        dropDownFilmList(JSON.parse(request.responseText))
    }
    request.send();
}

search.addEventListener('keypress', function () {
    dropDownLinks()
})
