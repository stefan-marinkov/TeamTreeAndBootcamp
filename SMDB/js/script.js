var section = document.querySelector(".shows");
var search = document.querySelector(".search");
var btn = document.querySelector(".btn");
var drop = document.querySelector(".dropDownMenu");

function filmsInfo(film) {
    var info = document.createElement("div");
    info.className = "inform col-sm-9 col-md-5 col-lg-4 pointer";
    var img = document.createElement("img");
    var title = document.createElement("p");

    section.appendChild(info);
    info.appendChild(img);
    info.appendChild(title);

    img.setAttribute("src", film.image.original);
    title.textContent = film.name;
    console.log(film);

    info.addEventListener('click', function () {
        localStorage.setItem("informationPage", film.id);
        location.href = "../page.html";
    })
}

function filmList(films) {
    for (var i = 0; i < 50; i++) {
        filmsInfo(films[i])
    }
}

function getData() {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.tvmaze.com/shows');

    request.onload = function () {
        filmList(JSON.parse(request.responseText))
    }
    request.send();
}
getData();
