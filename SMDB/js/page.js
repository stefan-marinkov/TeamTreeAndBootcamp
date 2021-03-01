
var inf = localStorage.getItem("informationPage");

var naslov = document.querySelector("h1");

var getItemsFromLocal = document.querySelector(".singleShow");

//FUNCTIONS FOR CREATING ELEMENTS

var createEl = (type, className) => {
    var el 
    el = document.createElement(type)
    el.className = className;
    return el;
}

 var information =  createEl("div", "infoFilm")
information.className = "infoFilm";

var title = createEl("h2", "title");
title.className = "title";

var divSecond = createEl("div", "divSecond flex-md-row");

var image = createEl("img", "bild mb-2");

var divThird = createEl("div", "divThird");

var seasons = createEl("div", "seasons");

var cast = createEl("p", "cast");

var details = createEl("P", "details my-3");

var numbSeason = createEl("h2");

var numbCast = createEl("h2");

var numbDetails = createEl("h2", "det");

getItemsFromLocal.appendChild(information);
information.appendChild(title)
information.appendChild(divSecond)
divSecond.appendChild(image)
divSecond.appendChild(divThird)
divThird.appendChild(seasons)
divThird.appendChild(cast)
information.appendChild(numbDetails);
information.appendChild(details)



function filmInfo(film) {
    title.textContent = film.name;

    image.setAttribute("src", film.image.original);
    
    numbDetails.textContent = "Show Details";
    details.innerHTML = film.summary;

}

function aboutFilm() {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.tvmaze.com/shows/' + inf);

    request.onload = function () {
        filmInfo(JSON.parse(request.responseText))
    }
    request.send();
}

aboutFilm()

function allSeason(all) {
    var someDate = document.createElement("p");
    someDate.className = "border-bottom border-info ";
    someDate.textContent = all.premiereDate + " - " + all.endDate;

    seasons.appendChild(someDate);
}


function numbOfSeasons(numb) {
    numbSeason.textContent = "Seasons " + numb.length;
    seasons.appendChild(numbSeason)

    for (var i = 0; i < 5; i++) {
        allSeason(numb[i])
    }
}


function aboutSeasons() {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.tvmaze.com/shows/' + inf + '/seasons');

    request.onload = function () {
        numbOfSeasons(JSON.parse(request.responseText))
    }
    request.send();
}

aboutSeasons()



function allCrew(crew) {
    console.log(crew);
    var someCastCrew = document.createElement("p");
    someCastCrew.className  = "border-bottom border-info ";
    someCastCrew.textContent = crew.person.name;
    seasons.appendChild(someCastCrew);
}


function allCasts(numbOf) {

    numbCast.textContent = "Cast";
    seasons.appendChild(numbCast)

    for (var i = 0; i < 5; i++) {
        allCrew(numbOf[i])
    }
}


function aboutCast() {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.tvmaze.com/shows/' + inf + '/cast');

    request.onload = function () {
        allCasts(JSON.parse(request.responseText))
    }
    request.send();
}

aboutCast()


// POVRATAK NA HOME PAGE

naslov.addEventListener('click', function () {
    location.href = '../index.html';
})