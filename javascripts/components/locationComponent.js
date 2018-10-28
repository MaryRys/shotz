

// // const initialLocationsView = () => {
// //     loadLocations()
// //     .then(data => {
// //        return writeMovie(movie);
// //     })
// //     .catch(error => {
// //         console.error(error);
// //     })
// // }
$.get('../db/locations.json')
    .done(data => {
    writeLocations(data.locationData);
    })
    .fail((error) => {
    console.error(error);
    })


const writeLocations = (Locations) => {
    let domString = '';
    Locations.forEach((location) => {
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

const morningFilter = () => {
    $('#customRadio1').click(() => {
        $('.locationData.location').show();
        $('.locationData.location').not('.morning').hide();
    })
};

morningFilter();

const afternoonFilter = () => {

};

const eveningFilter = () => {

};

const darkFilter = () => {

};

writeLocations();
// $.get('../../db/locations.json')
// .done((data) => {
//     writeLocations(data.locations);
// })
// .fail((error) => {
//     console.error(error);
// })

// export {writeLocations};