import axios from "axios";
class LocationService {
  getMyLocation = () => {
    let location = null;
    let latitude = null;
    let longitude = null;
    if (window.navigator && window.navigator.geolocation) {
      location = window.navigator.geolocation;
    }
    if (location) {
      location.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
      });
    }
    var loactionAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    return axios.get(loactionAPI);
  };
}
export default new LocationService();
