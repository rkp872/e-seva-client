class LocationService {
  getMyLocation = () => {
    let location = null;
    let latitude = null;
    let longitude = null;
    if (window.navigator && window.navigator.geolocation) {
      location = window.navigator.geolocation;
    }
    if (location) {
      location.getCurrentPosition(
        function (position) {
          latitude = position.coords.latitude + 2;
          longitude = position.coords.longitude - 3;
          console.log(latitude);
          console.log(longitude);
        },
        (err) => console.log(err),
        { enableHighAccuracy: true }
      );
    }
    var loactionAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    return fetch(loactionAPI);
  };
}
export default new LocationService();
