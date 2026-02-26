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
        const movieCardTitle = document.createElement("h1");
        const movieCardInfo = document.createElement("p");
        const movieCardYear = document.createElement("h2");
        const movieCardActors = document.createElement("h2");
        const movieCardTextWrapp = document.createElement("section");
        const movieCardTextSection = document.createElement("section")
        

        movieCard.classList.add("movie-card--no-hover");
        movieCard.classList.add("movie-card--vertical");
        movieCardTitle.classList.add("movie-card-title")
        movieCardTitle.classList.add("movie-card-title--black")
        movieCardImg.classList.add("movie-card-img");
        movieCardImg.classList.add("movie-card-img--storlek");
        movieCardInfo.classList.add("movie-card-info");
        movieCardYear.classList.add("movie-card-year");
        movieCardActors.classList.add("movie-card.Actors");

        movieCard.classList.add("movie-card", "movie-card--horizontal");
        movieCardTextWrapp.classList.add("movie-card-text-wrapp");
        movieCardTextSection.classList.add("movieCardTextSection");


        movieCardImg.alt = `Poster saknas på filmen:  ${omdbMoviesDetails.Title}` || "Poster saknas";

        movieCardTitle.innerText = omdbMoviesDetails.Title;
        movieCardActors.innerText = `Actors: ${omdbMoviesDetails.Actors}`;
        movieCardYear.innerText = `Year: ${omdbMoviesDetails.Year}`;
        movieCardInfo.innerText = omdbMoviesDetails.Plot;

        movieCardImg.src = omdbMoviesDetails.Poster;
        movieCardImg.alt = `Poster saknas för ${omdbMoviesDetails.Title}`;        
        
        

        movieCard.appendChild(movieCardImg);

        movieCard.appendChild(movieCardTextWrapp);
        movieCardTextWrapp.appendChild(movieCardTextSection);
        

        movieCardTextSection.appendChild(movieCardTitle);
        movieCardTextSection.appendChild(movieCardActors);
        movieCardTextSection.appendChild(movieCardYear);
        movieCardTextSection.appendChild(movieCardInfo);
        
      

        
        container.appendChild(movieCard);
        
        console.log('jag är innuti if(omdbMoviesDetails.title)')


    
}}


 console.log("hello jag är utanför renderMovies");
 