import {loadMovie} from '../data/movieData.js';

const initialMovieView = (movie) => {
    loadMovie()
    .then(movie => {
       writeMovie(movie);
    })
    .catch((error) => {
        console.error(error);
    });
}

const writeMovie = (movieData) => {
    let domString = '';
    movieData.forEach((movie) => {
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


export {initialMovieView};