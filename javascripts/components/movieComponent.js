// import {loadMovie} from '../data/movieData.js';


// const initialMovieView = () => {
//     loadMovie().then(movie => {
//        return writeMovie(movie);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// }

$.get('../db/movie.json')
    .done(data => {
    writeMovie(data.movieData);
    })
    .fail((error) => {
    console.error(error);
    })

const writeMovie = (movie) => {
    let domString = '';
    movie.forEach((movie) => {
        domString += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${movie.image}">
        <div class="card-body">
            <h5 class="card-title">${movie.name}</h5>
            <p class="card-text">${movie.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${movie.genre}</li>
            <li class="list-group-item">${movie.estimatedRelease}</li>
            <li class="list-group-item">${movie.description}</li>
        </ul>
        </div>
        `
        })
    $('#movie').append(domString);
};

writeMovie();