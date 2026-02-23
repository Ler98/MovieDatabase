export async function fetchRecommendedMovies() {
    const allMovies = await fetchData('https://santosnr6.github.io/Data/favoritemovies.json');
    return allMovies;
}
//2. datan som finns i fetchData hamnar i allMovies
//console.log(allMovies) skriver ut allMovies i konsoll.


export async function fetchAllMovies(searchText) {
    const omdbMovies = await fetchData (`http://www.omdbapi.com/?apikey=36ea5417&s=${searchText}`);
    return omdbMovies?.Search || [];
}


export async function fetchData(url) {
    try {
        const response = await fetch(url); //ger ett response-object
        const movies = await response.json(); //json plockar ut själva filmlistan från response
        console.log('det här är movies: ' ,movies)
        return movies;
    } catch(error){
        console.error(error.message);
        return null
    }

}

//1. fetchData är funktionnamnet och används här och när funktionen anropas. Där funktionen inporteras kan den användas.
//fetch(url) hämtar det som finns på url:en från nätet.
//awit response.json() skickar tillbaka movies till den som anropade funktionen.

//felhanterare ifall fel uppstår ex nätverksproblem.
// return null. Innan returnerade jag en tom array, men omdb är ett objekt så det funkar inte.

//export default kan användas en gång.
//export kan användas fler gånger.

//response innehåller bara paketet från nätverket, inte själva filmerna. 
//movies innehåller filmlistan
//när fetchData returnerar listan (movies)så hamnar den i allMovies
//allMovies = hela listan med filmer från json


export async function slumpaAntal (movies, count){
    
    const slumpadeFilmer = [];
    
    while (slumpadeFilmer.length < count) {
        const movieIndex = Math.floor(Math.random() * movies.length);//movieIndex innehåller ett heltal mellan 0 och längden på movies
     if (!slumpadeFilmer.some (m => m.imdbID === movies[movieIndex].imdbID)) {
            slumpadeFilmer.push(movies[movieIndex])
    }

    }
    return(slumpadeFilmer)
}

//ändrade till while-loop för att kunna kolla så filmerna inte är dubbletter.
// Det vet vi inte hur många ggr vi kollar drf blir det while-loop


//3. funktionen heter slumpaAntal och skickar med (movies) från funktionen fetchData.
//movies och count blir en lockal variabel automatiskt när det är en parameter. slumpaAntal(movies, count).
//movies och count är en tomm låda som väntar på att fyllas när funktionen anropas. slumpaAntal(allMovies, 5/ 20).
//allMovies kommer alltså in i functionen när slumpaAntal anropas. slumpaAntal(allMovies).
//slumpadeFilmer är en tom array som filmerna ska läggas in i med .push .
//movieIndex är ett index per varv i loopen. loopen går 5 eller 20 varv. de läggs in i slumpadeFilmer med .push.
//returnerar slumpadeFilmer som skickas tillbaka till anropet.







