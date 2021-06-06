import axios from "axios";
import { serverUrl } from "./../const";
class CentralRoomService {
  getAllTrafficViolator() {
    var url = `${serverUrl}/central-room/get-traffic-violator-list`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getFineDetails() {
    var url = `${serverUrl}/central-room/fine-details`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getFineList(filter) {
    var url = `${serverUrl}/central-room/fine-list/${filter}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getAllHelpRequests(filter) {
    var url = `${serverUrl}/central-room/help-request-list/${filter}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getTrafficPolice(filter) {
    var url = `${serverUrl}/central-room/get-traffic-police/${filter}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getFreeTrafficPolice(id) {
    var url = `${serverUrl}/central-room/free-traffic-police-list/${id}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  assignHelpRequest(assignHelpData) {
    var url = `${serverUrl}/central-room/assign-help-request`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, assignHelpData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getTrafficPoliceById(id) {
    var url = `${serverUrl}/central-room/get-traffic-police-by-id/${id}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  searchTrafficViolator(name) {
    var url = `${serverUrl}/central-room/search-traffic-violator/${name}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new CentralRoomService();
