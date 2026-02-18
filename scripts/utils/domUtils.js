

//search
document.querySelector("header__form-btn").addEventListener("click", () => {
    const searchText = document.querySelector('#searchInput').value;
    const resultat = searchMovie(allMovies, searchText);
    renderMovies(resultat);
})