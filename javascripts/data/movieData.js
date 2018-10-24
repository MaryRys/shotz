import {writeMovie} from '../components/movieComponent.js';

const loadMovie = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
          .done(movieData => {
            writeMovie(movieData.movies);
          })
          resolve(movieData)
          .fail((error) => {
              reject(error);
          })
    })
}

export {loadMovie};