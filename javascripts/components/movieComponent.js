
const writeMovie = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
    domString += `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${movieData.image}">
  <div class="card-body">
    <h5 class="card-title">${movieData.name}</h5>
    <p class="card-text">${movieData.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${movieData.genre}</li>
    <li class="list-group-item">${movieData.releaseDate}</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>`
    })
};

writeMovie();