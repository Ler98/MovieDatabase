
export function renderMovies (allMovies) {
    const container = document.querySelector(".content-wrapper")
    container.innerHTML = "";

    for(let movie of allMovies) {
        const movieItem = document.createElement("section");

        //Title
        const titleText = movie.Title || 'ingen title';
        movieItem.innerText = titleText;
        

        //Poster
        if (movie.Poster) {
            const img = document.createElement("img");
            img.src = movie.Poster;
            movieItem.appendChild(img);
        }

        //Trailer
        if (movie.Trailer_link) {
            const iframe = document.createElement("iframe");
            iframe.src = movie.Trailer_link;
            movieItem.appendChild(iframe);
        }
        container.appendChild(movieItem);
    }
    
}

//allMovies är en parameter (local variabel).
//container.innerHTML = ""; = tömmer .content-wrapper.
//loopar igenom varje movie i allMovies och skapar en section
//en title eller ingen title läggs till i movieItem.
//om det finns en poster i movie så skapas en img som den läggs in i. img hamnar i movieItem i en section.
//om det finns en trailer i movie så skapas en iframe som den läggs in i. iframe hamnar i movieItem i en section.
//allt läggs i en section