

// export function searchMovie(allMovies, searchText) {
//     if (!searchText) return [];
//     return allMovies.filter(movie =>
//     movie.Title === "string" && movie.Title.toLowerCase().includes(searchText.toLowerCase())
// )};

export function searchMovie(allMovies, searchText) {
    if (!searchText) return [];
    return allMovies.filter(movie =>
     movie.Title === "string" && typeof movie.Title.toLowerCase().includes(searchText.toLowerCase())
)};


//allMovies och searchText är parametrar (local variabel).
//om det inte finns en sök-text i input -> returnera en tom array.
//rerutnera allMovies som är en array av object (string i små bokstäver).