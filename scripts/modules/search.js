


export function searchMovie(omdbMovies, searchText) {
    if (!searchText) return [];
    return omdbMovies.filter(movie =>
     typeof movie.Title === "string" &&  movie.Title.toLowerCase().includes(searchText.toLowerCase().trim())
)};


//allMovies och searchText är parametrar (local variabel).
//om det inte finns en sök-text i input -> returnera en tom array.
//rerutnera allMovies som är en array av object (string i små bokstäver).
//typeof movie.Title = kollar att movie.Title är en string
//movie.Title === "string" && typeof movie.Title (kollar typen och värdet)