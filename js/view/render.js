const filmsWrapper = document.body.querySelector('.films-wrapper');

/**
 * Render films on DOM.
 * @param {*} films to display on DOM
 */
function renderFilms(films) {
    films.forEach(film => {
        renderFilm(film);
    });
}

/**
 * Use template to render film.
 * @param {*} film 
 */
function renderFilm(film) {
    // TODO: ugly rendering, lookup how to inject elements into DOM
    
    let filmWrapper = document.createElement('div');
    filmWrapper.className = 'rendered';
    filmWrapper.innerHTML = filmTemplate(film);
    
    filmsWrapper.appendChild(filmWrapper);
}

/**
 * HTML template of film
 * @param {*} film 
 * @returns String Literal representing HTML template for films
 */
function filmTemplate(film) {
    let favIcon = getFavIcon(film.id);

    return `<!-- Single Film -->
    <div class="film-wrapper">
    
        <!-- Film Header Info -->
        <div class="film-header-wrapper flex">
            <div class="film-title-wrapper"><h2 class="placeholder">${film.title}</h2></div>
            <div class="film-icon-wrapper">
                <div class="film-icon-favorite-wrapper">
                    <img class="film-icon-favorite icon" id="film-${film.id}" src=${favIcon} onclick="renderFavIcon(${film.id})">
                </div>
            </div>
        </div>
        <!-- Film Actual Info -->
        <div class="film-data-wrapper">
            <div class="film-details-wrapper">
                <p class="placeholder">${film.details}</p>
            </div>
            <div class="film-description-wrapper">
                <p class="placeholder">${film.description}</p>
            </div>
        </div>
        <br>
    
    </div>`;
}

function renderFavIcon(filmId) {
    let favImg = document.body.querySelector(`#film-${filmId}`);
    let isFav = toggleFavorite(filmId);
    favImg = getFavIcon(filmId);
    
    // TODO: ugly reload, check how to make re-render smooth
    window.location.reload(false);
}

function getFavIcon(filmId) {
    if (isFavorite(filmId))  return "./images/fav_on.png"
    return "./images/fav_off.svg"
}

/* More flexible rendering */ // currently overwrites existing content

/**
 * Render any view
 * @param {*} value - String to render
 * @param {*} elementIdentifier - query selector toin DOM
 */
function renderTextView(value, elementIdentifier) {
    let createdNode = document.createTextNode(value);
    document.body.querySelector(elementIdentifier).appendChild(createdNode);
}

function getNode(elementIdentifier) {
    let element = document.querySelector(elementIdentifier);
    return document.importNode(element, false);  // TODO: read about deep
}
