import axios from "axios";
import { serverUrl } from "./../const";

class TrafficPoliceService {
  getTrafficViolationTypes() {
    var url = `${serverUrl}/traffic-police/getAllTrafficViolationTypes`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  saveTrafficViolator(trafficViolator) {
    var url = `${serverUrl}/traffic-police/register-traffic-violator`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.post(url, trafficViolator, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  saveMedicalEmergency(medicalEmergency) {
    var url = `${serverUrl}/traffic-police/register-medical-emergency`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, medicalEmergency, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  saveSosRequest(sosRequest) {
    var url = `${serverUrl}/traffic-police/register-sos-request`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, sosRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getAssignedHelpRequest() {
    var url = `${serverUrl}/traffic-police/get-assigned-help-request`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  workingStatusHelpStatus(sosId) {
    var url = `${serverUrl}/traffic-police/working-status-help-request/${sosId}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  doneStatusHelpStatus(sosId) {
    var url = `${serverUrl}/traffic-police/done-status-help-request/${sosId}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new TrafficPoliceService();
