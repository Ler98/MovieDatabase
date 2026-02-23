
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

        movieCardImg.alt = movie.Title || "Poster saknas";

        movieCardText.innerText = movie.Title;
        
        movieCardImg.src = `${movie.Poster}` ;
        movieCard.appendChild(movieCardImg);
        movieCard.appendChild(movieCardText);
        // document.querySelector(".search-results-movies").appendChild(movieCard);
        container.appendChild(movieCard);
        }
       
        

        //Title
        // const titleText = movie.Title || 'ingen title';
        //     movieItem.innerText = titleText;
        
        
        

    //     //Poster
    //     if (movie.Poster) {
    //         const img = document.createElement("img");
    //         img.src = movie.Poster;
    //         movieItem.appendChild(img);
    //     }

    //     //Trailer
    //     if (movie.Trailer_link) {
    //         const iframe = document.createElement("iframe");
    //         iframe.src = movie.Trailer_link;
    //         movieItem.appendChild(iframe);
    //     }
    //     container.appendChild(movieItem);
    // }
    
}};

//allMovies är en parameter (local variabel).
//container.innerHTML = ""; = tömmer .content-wrapper.
//loopar igenom varje movie i allMovies och skapar en section
//en title eller ingen title läggs till i movieItem.
//om det finns en poster i movie så skapas en img som den läggs in i. img hamnar i movieItem i en section.
//om det finns en trailer i movie så skapas en iframe som den läggs in i. iframe hamnar i movieItem i en section.
//allt läggs i en section


document.querySelectorAll(".movie-card-img").forEach(img => console.log(img.alt));