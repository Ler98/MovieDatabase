import {fetchRecommendedMovies} from "./modules/api.js";
import {slumpaFem} from "./modules/api.js";
import {slumpaTjugo} from "./modules/api.js"
import { renderTrailer} from "./modules/caroussel.js";

//importerar och anropar funktionerna.

const allMovies = await fetchRecommendedMovies();
const slumpade = await slumpaFem(allMovies);
const slumpadeTjugo = await slumpaTjugo(allMovies);
// console.log(slumpade);
// renderTrailer(movie, num);



if(window.location.pathname === '/' || window.location.pathname.includes ('index.html')) {
    slumpade.forEach((movie, index) => {
    renderTrailer(movie, index);
    });

    // slumpadeTjugo.forEach((movie, index) => {
    //     console.log('fungerar')
    // renderTrailer(movie, index);
    // });
    //4
    //tar första filmen i slumpade, sätter den i variabeln movie och positionen i index.
    //anropar funktionen renderTrailer
    //gör samma sak för alla 5 filmer som finns i slumpa. men nästa varv blir det andra filmen i slumpade osv.
    console.log('index.html');

} else if(window.location.pathname.includes('favorites.html')) {
    console.log('favorites.html');

} else if(window.location.pathname.includes('movie.html')) {
    console.log('movie.html');

} else if(window.location.pathname.includes('search.html')) {
    console.log('search.html');
}

//just nu skrivs det bara ut vilken sida man är på i konsoll.
//tanken är nog att använda koden senare. om man är på startsidan -> hämta detta osv.




 







for (const movie of slumpade) {
    const movieCard = document.createElement("img");
    movieCard.src = `${movie.trailer_link}` ;
    document.querySelector(".trailers").appendChild(movieCard);
}

for (const movie of slumpadeTjugo) {
    const movieCard = document.createElement("img");
    movieCard.src = `${movie.Poster}` ;
    document.querySelector(".content-wrapper.center").appendChild(movieCard);
}

//4
//en for of loop som loopar alla filmer i slumpade.
//skapar ett element (img)
//lägger in urlen som finns i movie.poster i img. texten är en url för bilden på filmen.
//hämtar första elementet med klassen trailers.
//lägger in movieCard inuti trailers

//trailers och content-wrapper center är klassnamn i html
