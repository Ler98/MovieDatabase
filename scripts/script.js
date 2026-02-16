import {fetchRecommendedMovies} from "./modules/api.js";
import {blanda} from "./modules/api.js";
fetchRecommendedMovies();
blanda();

if(window.location.pathname === '/' || window.location.pathname.includes ('index.html')) {
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


