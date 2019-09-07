
window.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    getFavorites((favorites) => {
        console.log('got Favorites:');
        console.log(favorites);

        if (favorites)  renderFilms(favorites);
    });
}