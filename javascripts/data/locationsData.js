import {writeLocations} from '../components/locationComponent.js';

const loadLocations = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
          .done((data ) => {
            writeLocations(data.location);
            resolve(locationsData)
          })
          .fail((error) => {
              reject(error);
          })
    })
}

export {loadLocations};