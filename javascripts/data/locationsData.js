// import {writeLocations} from '../components/locationComponent.js';

// // AJAX 

// const loadLocations = () => {
//     $.get('../../db/locations.json')
//     .done((data) => {
//         writeLocations(data.locations);
//     })
//     .fail((error) => {
//         console.error(error);
//     })
        
// }


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

// export {loadLocations};