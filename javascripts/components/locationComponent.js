import {loadLocations} from '../data/locationsData.js';

const initialLocationsView = () => {
    loadLocations()
    .then((location) => {
       writeLocations(location);
    })
    .catch(error => {
        console.error(error);
    })
}

// $.get('../db/locations.json')
//     .done(data => {
//     writeLocations(data.locationData);
//     })
//     .fail((error) => {
//     console.error(error);
//     })


const writeLocations = (locationData) => {
    let domString = '';
    locationData.forEach((location) => {
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
    $('#locations').html(domString);
};

export {initialLocationsView, writeLocations};