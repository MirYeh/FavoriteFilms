const storage = window.localStorage;
const cacheKey = 'cacheFilms'

/**
 * Save films to cache.
 * Helps to avoid too many API calls and slow rendering.
 * @param {*} films 
 */
function setFilmCache(films) {
    let all = {}
    films.forEach(film => {
        all[withFilmKey(film.id)] = film;
    });
    console.log(`setting to cache...`);
    console.log(all);
    storage.setItem(cacheKey, JSON.stringify(all));
}

/**
 * Get films from cache.
 * @returns a map of key-value filmId and film information.
 */
function getFilmCache() {
    console.log('film cache:');
    console.log(JSON.parse(storage.getItem(cacheKey)));
    return JSON.parse(storage.getItem(cacheKey));
}

function isFavorite(filmId) {
    return storage.getItem(withFilmKey(filmId))
}

/**
 * Toggles favorite state.
 * @param {*} filmId 
 * @returns a boolean value indicating if the film's post-toggle state is on/off
 */
function toggleFavorite(filmId) {
    let isFav = isFavorite(filmId);
    if (isFav) {
        storage.removeItem(withFilmKey(filmId));
        return false;
    } else {
        storage.setItem(withFilmKey(filmId), true);
        return true;
    }
}

/**
 * Get favorite films from storage and invoke callback with results (if any).
 * @param {function} callback
 */
function getFavorites(callback) {
    let cache = getFilmCache();
    let favorites = []

    Object.keys(storage).forEach(filmId => {
        if (filmId != cacheKey) {
            console.log(`filmId ${filmId}`);
            console.log(cache[filmId]);
            favorites.push(cache[filmId]);
        }
    });

    if (favorites && favorites.length > 0) {
        console.log('calling back');
        console.log(favorites);
        callback(favorites);
    } else {
        alert("No favorites");
    }
}

function withFilmKey(filmId) {
    return `film-${filmId}`;
}
