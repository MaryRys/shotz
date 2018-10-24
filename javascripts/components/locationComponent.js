

const initialLocationsView = () => {
    loadLocations()
    .then(data => {
       return writeMovie(movie);
    })
    .catch(error => {
        console.error(error);
    })
}

const writeLocations = (myLocations) => {
    let domString = '';
    myLocations.forEach((location) => {
        domString += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${location.image}" alt="Card image cap">
                    <div class="card-body">
                        <h6 class="title">${location.name}</h6>
                        <p class="card-text">${location.address}</p>
                        <p class="card-text">${location.time}</p>
                    </div>
            </div>
        `
    })
    $('#locations').append(domString);
}

export {writeLocations, initialLocationsView};