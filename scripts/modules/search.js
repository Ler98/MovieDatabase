

export function searchMovie(allMovies, searchText) {
    return allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchText.tolowerCase())
)};

//håller på med sökfunktion