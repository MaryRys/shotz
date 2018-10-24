import {writeLocations} from '../components/locationComponent.js';

// AJAX 

const loadMovie = () => {
    return new Promise((resolve, reject) => {
            $.get('../../db/locations.json')
            .done(locationData => {
                writeLocations(locationData.locations);
            })
            .fail((error) => {
                console.error(error);
            })
        })
}


// const loadMovie = () => {
//     return new Promise((resolve, reject) => {
//         $.get('../db/movie.json')
//           .done(movieData => {
//             writeMovie(movieData.movies);
//           })
//           resolve(movieData)
//           .fail((error) => {
//               reject(error);
//           })
//     })
// }

loadLocations();