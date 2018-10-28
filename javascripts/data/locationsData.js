const loadLocations = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
          .done((data ) => {
            resolve(data.locationData)
          })
          .fail((error) => {
              reject(error);
          })
    })
}

export {loadLocations};