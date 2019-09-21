const schema = "https";
const baseUrl = `${schema}://swapi.co/api/films`;

/**
 * Get all films from Swapi.co
 * @param {*} callback 
 */
function getFilms(callback) {
    console.log("getting films from API");
    fetch(baseUrl).then((response) => {
        return response.json();
    }).then((data) => {
        let films = []
        data.results.forEach((film) => {
            films.push(mapToFilm(film))
        });
        callback(films);
    }).catch((e) => {
        console.warn(e);
    });
};

/**
 * Maps API results to Film
 * @param {*} result - result from API call
 * @returns a Film object
 */
function mapToFilm(result) {
    let director = result.director;
    let producer = result.producer;
    let created = result.created.split("T")[0];
    let splitUrl = result.url.split("/")
    let id = splitUrl[splitUrl.length - 2];
    let details = `${created}, produced by ${producer}, directed by ${director}`;
    return {
        title: result.title,
        details: details,
        description: result.opening_crawl,
        id: id
    }
    
}