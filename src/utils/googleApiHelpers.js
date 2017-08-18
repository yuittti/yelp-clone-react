export function searchNearby (google, map, request) {
  
  return new Promise((resolve, reject) => {
    console.log(google);
    const service = new google.maps.places.PlacesService(map);
    console.log(service);

    service.nearbySearch(request, (results, status, pagination) => {
      
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        resolve(results, pagination);
      } else {
        reject(results, status);
      }
    })
  });
};

export function getDetails(google, map, placeId) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {placeId};

    service.getDetails(request, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return reject(status);
      } else {
        resolve(place);
      }
    })
  })
};
