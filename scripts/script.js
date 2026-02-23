import {fetchRecommendedMovies} from "./modules/api.js";
import {fetchAllMovies} from "./modules/api.js";
import {slumpaAntal} from "./modules/api.js"
import {renderTrailer} from "./modules/caroussel.js";
import {renderMovies} from "./utils/domUtils.js"
import {searchMovie} from "./modules/search.js"

//importerar och anropar funktionerna.

const allMovies = await fetchRecommendedMovies();
// const omdbMovies = await fetchAllMovies(searchText);
const slumpade = await slumpaAntal(allMovies, 5);
const slumpadeTjugo = await slumpaAntal(allMovies, 20);
console.log("Antal filmer i allMovies:", allMovies.length);

//variablar anropar funktioner?





if(window.location.pathname === '/' || window.location.pathname.includes ('index.html')) {
    slumpade.forEach((movie, index) => {
    renderTrailer(movie, index);
    });

    //search
    document.querySelector(".header__form").addEventListener("submit", async (e) => {
    e.preventDefault(); // stoppar omladdning

    const searchText = document.querySelector('#searchInput').value;

    if (!searchText) return; // stoppa tom sökning

    // const omdbMovies = await fetchAllMovies(searchText); // skickar texten
    // renderMovies(omdbMovies); // renderar direkt
    window.location.href = `search.html?query=${searchText}`
    });

    // document.querySelector(".header__form").addEventListener("submit", (e) => {
    // e.preventDefault(); // stoppar omladdning
    // const searchText = document.querySelector('#searchInput').value;
    // const resultat = searchMovie(omdbMovies, searchText);
    // renderMovies(resultat);
    // });


    //hämtar klassen .header__form i html och lyssnar på skicka.
    //hämtar ett id i html som läggs i searText.
    //allMovies och searchText (texten i input) skickas med i funktionen och läggs in i resultat.



    for (const movie of slumpade) {
        const movieCard = document.createElement("iframe");
        movieCard.src = `${movie.Trailer_link}` ;
        document.querySelector(".trailers__container").appendChild(movieCard);
    }

    for (const movie of slumpadeTjugo) {
        const movieCard = document.createElement("section");
        const movieCardImg = document.createElement("img");
        const movieCardText = document.createElement("h4");
        movieCard.classList.add("movie-card");
        movieCardText.classList.add("movie-card-text")
        movieCardImg.classList.add("movie-card-img");
        movieCardText.innerText = movie.Title;
        movieCardImg.src = `${movie.Poster}` ;
        movieCard.appendChild(movieCardImg);
        movieCard.appendChild(movieCardText);
        document.querySelector(".content-wrapper.center").appendChild(movieCard);
    }

    //4
    //en for of loop som loopar alla filmer i slumpade.
    //skapar ett element (img)
    //lägger in urlen som finns i movie.poster i img. texten är en url för bilden på filmen.
    //hämtar första elementet med klassen trailers.
    //lägger in movieCard inuti trailers

    //trailers och content-wrapper center är klassnamn i html

    //card, img och text läggs till i samma.

    console.log('index.html');

} else if(window.location.pathname.includes('favorites.html')) {
    console.log('favorites.html');

} else if(window.location.pathname.includes('movie.html')) {
    console.log('movie.html');

} else if(window.location.pathname.includes('search.html')) {
    console.log('search.html');

    const params = new URLSearchParams(window.location.search);
    const searchText = params.get("query");

    if (searchText) {
        const omdbMovies = await fetchAllMovies(searchText);

        const unikID = new Set();
        const unikaResultat = omdbMovies.filter(movie => {
            if (unikID.has(movie.imdbID)) return false;
            unikID.add(movie.imdbID);
            return true;
        });
        console.log(unikaResultat);
        renderMovies(unikaResultat);
    }}


//window.location.search är delen av URL:en som kommer efter frågetecknet (?)
//query används för att kunna skicka data mellan sidor och göra länkar delbara och spara historik.
// men namnet query är valfritt.
//Anropar funktion fetchAllMovies med det sökord användaren skrev (searchText).
//await betyder att JavaScript väntar på att API:et ska svara innan det går vidare.
//Resultatet (omdbMovies) är en lista/array med filmer som matchar sökordet.






//överblick
// Tänk på allMovies som en stor låda med alla filmer.
// Den innehåller alltså alla filmobjekt som du hämtade från JSON:en.

// Den funktionen tar lådan med alla filmer (allMovies) och filtrerar ut bara de filmer som matchar söktexten.
// Resultatet blir en ny låda med bara de filmer som matchar.

// När du skickar in resultat i renderMovies så går funktionen igenom varje film i den nya lådan.
// För varje film:
// Skapar en section
// Lägger till titel, bild och trailer i den section
// Stoppar sectionen i container på sidan
// Alltså: bara filmerna i resultat syns på sidan, inte alla filmer i allMovies.

