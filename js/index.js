

window.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    cache = getFilmCache();
    if (!cache) {
        getFilms(cacheAndRender);
    }
    else {
        let films = []
        Object.keys(cache).forEach(filmId => {
            films.push(cache[filmId]);
        });
        renderFilms(films);
    }
}

function cacheAndRender(films) {
    setFilmCache(films);
    renderFilms(films);
}