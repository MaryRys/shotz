import {writeMovie} from '../components/movieComponent.js';

const loadMovie = () => {
    return new Promise((resolve, reject) => {
        $.get('../../db/movie.json')
          .done((data) => {
            writeMovie(data);
            resolve(data)
          })
          .fail((error) => {
              reject(error);
          })
    })
}

export {loadMovie};