//importerar och anropar funktionerna.
import {fetchRecommendedMovies} from "./modules/api.js";
import {fetchAllMovies} from "./modules/api.js";
import {fetchMovieDetails} from "./modules/api.js"
import {slumpaAntal} from "./modules/api.js"
import {renderTrailer} from "./modules/caroussel.js";
import {renderMovies} from "./utils/domUtils.js"
import {renderOmdbMovies} from "./components/movieCard.js"
import {renderFavorites} from "./components/favorites.js"


//variablar anropar funktioner
const allMovies = await fetchRecommendedMovies();
const slumpade = await slumpaAntal(allMovies, 5);
const slumpadeTjugo = await slumpaAntal(allMovies, 20);






//index.html
if(window.location.pathname === '/' || window.location.pathname.includes ('index.html')) {
    slumpade.forEach((movie, index) => {
    renderTrailer(movie, index);
    });

    //search
    document.querySelector(".header__form").addEventListener("submit", async (e) => {
    e.preventDefault(); // stoppar omladdning

    const searchText = document.querySelector('#searchInput').value;

    if (!searchText) return; // stoppa tom sökning

    window.location.href = `search.html?query=${searchText}`
    });

    //om man är på index.html eller om urlen innehhåller / (startsidan).
    //loopar igenom de redan slumpade filmerna.
    //skickar varje film och dess index till renderTrailer
    //renderar ut trailers från de slumpade movie och index
    //hämtar klassen .header__form i html och lyssnar på skicka.
    //hämtar värdet som användaren skrev i input. använder id:t för att hitta input
    //om searchText är tom avsluta
    //skickar anvädaren till search.html och bifogar söktexten i url:en


     const container = document.querySelector(".content-wrapper.center");
     //hämtar två klass i html och lägger dem i variabeln "container" som skapas här
     //hämtar endast den som har båda klasserna

    //skapar trailers
    for (const movie of slumpade) {
        const movieCard = document.createElement("iframe");
        movieCard.src = `${movie.Trailer_link}` ;
        document.querySelector(".trailers__container").appendChild(movieCard);
    }
    //loopar igenom varje film i slumpade
    //skapar en iframe för varje film som hamnar i variabeln movieCard.
    //länken tll rätt film plaseras ut
    //hämtar class i index.html
    //lägger iframe i trailer__container
    //alltså: varje iframe som skapas får sin egen src länk från movie.trailer_link
    //i trailer__container läggs x antal (5) iframe och i varje iframe läggs filmens länk till trailern



    //skapar kort
    for (const movie of slumpadeTjugo) {
        const movieCard = document.createElement("section");
        const movieCardImg = document.createElement("img");
        const movieCardText = document.createElement("h2");
        const movieCardImgSection = document.createElement("section");
        const movieCardImgStar = document.createElement("img");
        const movieCardButton = document.createElement("button");


        movieCard.dataset.id = movie.imdbID;

        
        movieCard.classList.add("movie-card");
        movieCardText.classList.add("movie-card-text")
        movieCardButton.classList.add("movie-card-button")
        movieCardImg.classList.add("movie-card-img");
        movieCardImgSection.classList.add("movie-card-img-section")
        

        
        movieCardText.innerText = movie.Title;
        movieCardButton.innerText = "Lägg till i favorit"

        movieCardImg.src = `${movie.Poster}` ;
        movieCardImg.alt = `Poster saknas på filmen:  ${movie.Title}` || "Poster saknas";

        
        movieCard.appendChild(movieCardImg);
        movieCard.appendChild(movieCardText);
        movieCardImgSection.appendChild(movieCardButton)
        movieCard.appendChild(movieCardImgSection);
        
        document.querySelector(".index-grid").appendChild(movieCard);
        console.log('jag är i if(const movie of slumpadeTjugo)')
        }
        //4
        //lopar igenom varje film i slumpadeTjugo
        //skapar en section, img, h4 
        //lägger till klassen movie-card på section (movieCard)
        //sparar filmens imdbID i dataset.id på sectionen (movieCard)
        //lägger till klasser för text och img och lägger in dem i movieCardText/img
        //lägger in filmens tilteln i <h4> och poster i <img>
        //lägger in <h4> och <img> i section (movieCard)
        //lägger in hela section (som innehåller allt) i html klassen content-wrapper.center


        //klicka på film
        container.addEventListener("click", (e) => {
        
            const favBtn = e.target.closest(".movie-card-button");
            if (favBtn) {
                e.stopPropagation() //stoppar klick från att gå vidare

                const card = favBtn.closest(".movie-card");
                const imdbId = card.dataset.id;


                //hämta gamla favoriter
                const favorites = JSON.parse(localStorage.getItem("favorites")) || [];


                if (favorites.includes(imdbId)) {
                    // TA BORT
                    const updatedFavorites = favorites.filter(id => id !== imdbId);
                    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                    favBtn.innerText = "Lägg till i favoriter";
                    console.log("Borttagen från favoriter");
                } else {
                    // LÄGG TILL
                    favorites.push(imdbId);
                    localStorage.setItem("favorites", JSON.stringify(favorites));
                    favBtn.innerText = "Ta bort från favoriter";
                    console.log("Tillagd i favoriter");
                }


                console.log("sparat favorit");
                return; //så den inte går visare och öppnar filmen
            }
            

            if (!e.target.classList.contains ("movie-card-img")) return; // stoppar omladdning

            const card = e.target.closest(".movie-card");

            const imdbId = card.dataset.id;
            console.log("du klickar", imdbId);

            localStorage.setItem('activeMovie', imdbId);// till favoriter, ska nog ligga i funktionen till knappen.
            window.location.href = `movie.html?query=${imdbId}`
            
        });
        //Container som innehåller klassen content-wrapper.center
        //lyssnar på klick på hela containern. mindre kod och bättre än om vi ska lynnsa på varje kort.
        //klassen movie-card läggs till i card.
        //e.target = är det exakta elementet som användaren klickade på. e = event
        //om inget filmkort klickades på så avsluta.
        //annars hämtas imdbId från card.dataset.id.
        //så koden letar efter det filmkortet som är det klickade och det är drf den kollar igenom dom-trädet eftersom movi-card ligger där.
        //dataset är en inbyggd egenskap i DOM-element som gör det lätt att läsa och skriva data-attributes
        //skickar användaren till movie.html och bibogar imdbID i url:en som en query-parameter

        console.log('index.html');


    } else if(window.location.pathname.includes('favorites.html')) {
            console.log('favorites.html');
            renderFavorites();

            console.log('favorites.html');

        //     const container = document.querySelector(".index-grid");

        //     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        //     for (const imdbId of favorites) {
        //     const movie = await fetchMovieDetails(imdbId);

        //     const movieCard = document.createElement("section");
        //     const movieCardImg = document.createElement("img");
        //     const movieCardText = document.createElement("h2");

        //     movieCard.classList.add("movie-card");
        //     movieCardImg.classList.add("movie-card-img");
        //     movieCardText.classList.add("movie-card-text");

        //     movieCard.dataset.id = movie.imdbID;

        //     movieCardImg.src = movie.Poster;
        //     movieCardText.innerText = movie.Title;

        //     movieCard.appendChild(movieCardImg);
        //     movieCard.appendChild(movieCardText);

        //     container.appendChild(movieCard);
        // }

    } else if(window.location.pathname.includes('movie.html')) {
        console.log('movie.html');
        (async () => {
            const params = new URLSearchParams(window.location.search);
            const movieImdbId = params.get("query");
            console.log("movieImdbId: ", movieImdbId);

            if(movieImdbId) {
                const omdbMoviesDetails = await fetchMovieDetails(movieImdbId);
                console.log("movie details: ", omdbMoviesDetails);
                renderOmdbMovies(omdbMoviesDetails);
            }
        })();
            //om man är på movie.html
            //hämtar värget i urlen och lägger in det i movieImdbId
            //om movieImdbId finns:
            //rendera ut omdbMoviesDetails på skärmen


  


    


} else if(window.location.pathname.includes('search.html')) {
    console.log('search.html');

    (async () => {

    
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
        }
    })();

// Klicklyssnare för search.html
if (window.location.pathname.includes("search.html")) {
    const container = document.querySelector(".search-results-movies");
    if (container) {
        container.addEventListener("click", (e) => {
            const card = e.target.closest(".movie-card");
            if (!card) return;
            const imdbId = card.dataset.id;
            window.location.href = `movie.html?query=${imdbId}`;
        });
    }
}

}
    //window.location.search är delen av URL:en som kommer efter frågetecknet (?) i urlen.
    //query används för att kunna skicka data mellan sidor och göra länkar delbara och spara historik.
    //namnet query är valfritt, men måste dock stämma på fler ställen.
    //hämtar söktexten från användaren
    //Anropar funktion fetchAllMovies och med det sökord användaren skrev (searchText).
    //await betyder att JavaScript väntar på att API:et ska svara innan det går vidare.
    //skapar ett Set (unikID) för att hålla koll på vilka filmer som redan har visats.

    //filtrerar omdbMovies. om filmen redan har hittats så skrivs den inte ut igen
    //renderMovies (unikaResultat) är en lista/array med filmer som matchar sökordet som renderas ut på sidan


    //set är en inbyggd typ i javascprit som fungerar lite som en array, men kan bara innehålla unika värden.
    //new är ett nyckelord i js. används när du vill skapa ett nytt objekt från en konstruktor eller klass.
    //new Set() -> skapar mig en tom låda som bara tar unika saker
    //unikId.add(x) -> lägg x i lådan, men om det redan finns, gör inget.
    




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


