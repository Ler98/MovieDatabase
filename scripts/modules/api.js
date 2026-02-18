export async function fetchRecommendedMovies() {
    const allMovies = await fetchData('https://santosnr6.github.io/Data/favoritemovies.json');
    return allMovies;
}

//2. datan som finns i fetchData hamnar i allMovies
//console.log(allMovies) skriver ut allMovies i konsoll.


export async function fetchData(url) {
    try {
        const response = await fetch(url); //ger ett response-object
        const movies = await response.json(); //json plockar ut själva filmlistan från response
        console.log('det här är movies: ' ,movies)
        return movies;
    } catch(error){
        console.error(error.message);
        return []
    }

}

//1. fetchData är funktionnamnet och används här och när funktionen anropas. Där funktionen inporteras kan den användas.
//fetch(url) hämtar movies från nätet.
//awit response.json() skickar tillbaka movies till den som anropade funktionen.

//felhanterare ifall fel uppstår ex nätverksproblem.
// return skickar tillbaka en tom lista ist för att sidan krachar.

//export default kan användas en gång.
//export kan användas fler gånger.

//response innehåller bara paketet från nätverket, inte själva filmerna. 
//movies innehåller filmlistan
//när fetchData returnerar listan (movies)så hamnar den i allMovies
//allMovies = hela listan med filmer från json


export async function slumpaFem (movies){
    console.log('inne i slumpaFem', movies ? movies.length: "movies är underfinde");
    const femFilmer = [];
    
    for (let i = 0; i < 5; i++) {
        const movieIndex = Math.floor(Math.random() * movies.length);//movieIndex innehåller ett heltal mellan 0 och längden på movies
        femFilmer.push(movies[movieIndex])
    }
    console.log('Här är fem slumpade filmer:' ,femFilmer)
    return(femFilmer)

 }

export async function slumpaTjugo (movies){
    // console.log('inne i slumpaTjugo', movies ? movies.length: "movies är underfinde");
    const TjugoFilmer = [];
    
    
    for (let i = 0; i < 20; i++) {
        const movieIndex2 = Math.floor(Math.random() * movies.length);//movieIndex innehåller ett heltal mellan 0 och längden på movies
        TjugoFilmer.push(movies[movieIndex2])
    }
    console.log('Här är fem slumpade filmer:' ,TjugoFilmer)
    return(TjugoFilmer)

 }


//3. funktionen heter slumpaFem och skickar med (movies) från funktionen fetchData.
//movies blir en lockal variabel automatiskt när det är en parameter. slumpaFem(movies).
//movies är en tomm låda som väntar på att fyllas när funktionen anropas. slumpaFem(allMovies).
//allMovies kommer alltså in i functionen när slumpaFem anropas. slumpaFem(allMovies).
//femFilmer är en tom array som filmerna ska läggas in i med .push .
//movieIndex är 5 slumpade indexnummer där motsvarande indexnummer i movies läggs in i femFilmer med .push.
//returnerar femFilmer som skickas tillbaka till anropet.


//async oxh await behöver finnas på alla functioner som inte anropas i en funktion och som inte behöver vänta på annan kod.



