const loadMovie = () => {
    return new Promise((resolve, reject) => {
        $.get('../../db/movie.json')
          .done((data) => {
            // writeMovie(data);
            resolve(data.movieData)
          })
          .fail((error) => {
              reject(error);
          })
    })
}

export {loadMovie};