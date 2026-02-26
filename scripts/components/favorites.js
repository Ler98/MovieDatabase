import { fetchMovieDetails } from "../modules/api.js";



export async function renderFavorites() {
    const container = document.querySelector(".index-grid");

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    for (const imdbId of favorites) {
    const movie = await fetchMovieDetails(imdbId);

    const movieCard = document.createElement("section");
    const movieCardImg = document.createElement("img");
    const movieCardText = document.createElement("h2");

    movieCard.classList.add("movie-card");
    movieCardImg.classList.add("movie-card-img");
    movieCardText.classList.add("movie-card-text");

    movieCard.dataset.id = movie.imdbID;

    movieCardImg.src = movie.Poster;
    movieCardImg.alt = `Poster för filmen ${movie.Title}`;
    movieCardText.innerText = movie.Title;

    movieCard.appendChild(movieCardImg);
    movieCard.appendChild(movieCardText);

    container.appendChild(movieCard);
}
}




// console.log("existerar jag utanför i favoriter?")


// async function renderFavorites(){
// const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
// const container = document.querySelector(".index-grid");

//     for (const imdbId of favorites) {
//         const movie = await fetchMovieDetails(imdbId);
    
//         const movieCard = document.createElement("section");
//         const movieCardImg = document.createElement("img");
//         const movieCardText = document.createElement("h2");
//         const movieCardImgSection = document.createElement("section");
//         const movieCardButton = document.createElement("button");


//         movieCard.dataset.id = movie.imdbID;

        
//         movieCard.classList.add("movie-card");
//         movieCardText.classList.add("movie-card-text")
//         movieCardButton.classList.add("movie-card-button")
//         movieCardImg.classList.add("movie-card-img");
//         movieCardImgSection.classList.add("movie-card-img-section")
        
        
        
//         movieCardText.innerText = movie.Title;
//         movieCardButton.innerText = "Lägg till i favorit"

//         movieCardImg.src = `${movie.Poster}` ;
//         movieCardImg.alt = `Poster saknas på filmen:  ${movie.Title}` || "Poster saknas";

        

//         movieCard.appendChild(movieCardImg);
//         movieCard.appendChild(movieCardText);
//         movieCardImgSection.appendChild(movieCardButton)
//         movieCard.appendChild(movieCardImgSection);
        
//         container.appendChild(movieCard);

//         console.log("existerar jag i favoriter?")



//         // Ta bort favorit när man klickar på knappen
//         movieCardButton.addEventListener("click", () => {
//             const index = favorites.indexOf(imdbId);
//             if (index > -1) {
//                 favorites.splice(index, 1);
//                 localStorage.setItem("favorites", JSON.stringify(favorites));
//                 movieCard.remove();
//                 console.log("Favorit borttagen:", movie.Title);
//             }
//         });
       

//          }
// }
// renderFavorites();


//         console.log("existerar jag utanför i favoriter?");