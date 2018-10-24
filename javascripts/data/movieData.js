
const loadMovie = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
          .done((data) => {
              resolve(data);
          })
          .fail((error) => {
              console.log(error);
          })
    })
}

export {loadMovie};