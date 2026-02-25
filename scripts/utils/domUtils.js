
//hör till sökfunktionen

console.log("renderMovies kör");
export function renderMovies (allMovies) {
    const container = document.querySelector(".search-results-movies")
    container.innerHTML = "";

    for(let movie of allMovies) {

        if (movie.Title) {
            const movieCard = document.createElement("section");
            const movieCardImg = document.createElement("img");
            const movieCardText = document.createElement("h4");
            movieCard.classList.add("movie-card");
            movieCardText.classList.add("movie-card-text");
            movieCardImg.classList.add("movie-card-img");

            movieCard.dataset.id = movie.imdbID;

            movieCardImg.alt = `Poster saknas på filmen:  ${movie.Title}` || "Poster saknas";

            movieCardText.innerText = movie.Title;
            
            movieCardImg.src = `${movie.Poster}` ;
            movieCard.appendChild(movieCardImg);
            movieCard.appendChild(movieCardText);
            container.appendChild(movieCard);
            console.log('jag är innuti if(movie.title)')
        } 
    }
};


document.querySelectorAll(".movie-card-img").forEach(img => console.log(img.alt));
//allMovies är en parameter (local variabel).
//container.innerHTML = ""; = tömmer .content-wrapper.
//loopar igenom varje movie i allMovies och skapar en section
//en title eller ingen title läggs till i movieItem.
//om det finns en poster i movie så skapas en img som den läggs in i. img hamnar i movieItem i en section.
//om det finns en trailer i movie så skapas en iframe som den läggs in i. iframe hamnar i movieItem i en section.
//allt läggs i en section


    