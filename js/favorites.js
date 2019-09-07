
window.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    getFavorites((favorites) => {
        if (favorites)  renderFilms(favorites);
    });
}