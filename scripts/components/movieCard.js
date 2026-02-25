console.log("VI ÄR PÅ MOVIE.HTML");
console.log("Search:", window.location.search);

export function renderOmdbMovies (omdbMoviesDetails) {
    const container = document.querySelector(".movieOmdbPage")
    container.innerHTML = "";
    console.log("jag är i funktionen renderMovies")
    console.log(omdbMoviesDetails);



    if(omdbMoviesDetails.Title) {
        const movieCard = document.createElement("section");
        const movieCardImg = document.createElement("img");
        const movieCardText = document.createElement("h4");
        const movieCardInfo = document.createElement("p");
        const movieCardYear = document.createElement("p");
        const movieCardActors = document.createElement("p");
        

        movieCard.classList.add("movie-card");
        movieCard.classList.add("movie-card--no-hover-flex");
        movieCardText.classList.add("movie-card-text")
        movieCardImg.classList.add("movie-card-img");
        movieCardImg.classList.add("movie-card-img--storlek");
        movieCardInfo.classList.add("movie-card-info");
        movieCardYear.classList.add("movie-card-year");
        movieCardActors.classList.add("movie-card.Actors");


        movieCardImg.alt = `Poster saknas på filmen:  ${omdbMoviesDetails.Title}` || "Poster saknas";

        movieCardText.innerText = omdbMoviesDetails.Title;
        movieCardActors.innerText = omdbMoviesDetails.Actors;
        movieCardYear.innerText = omdbMoviesDetails.Year;
        movieCardImg.src = omdbMoviesDetails.Poster;
        movieCardInfo.innerText = omdbMoviesDetails.Plot;
        
        

        movieCard.appendChild(movieCardImg);
        movieCard.appendChild(movieCardText);
        movieCard.appendChild(movieCardActors);
        movieCard.appendChild(movieCardYear);
        movieCard.appendChild(movieCardInfo);
        
        
        container.appendChild(movieCard);
        
        console.log('jag är innuti if(omdbMoviesDetails.title)')


    
}}


 console.log("hello jag är utanför renderMovies");
 