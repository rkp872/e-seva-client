import axios from "axios";
import { serverUrl } from "./../const";
class MedicalTeamServices {
  getAllMedicalEmergency(filter) {
    var url = `${serverUrl}/medical-team/get-medical-emergency/${filter}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getAmbulance(filter) {
    var url = `${serverUrl}/medical-team/get-ambulance/${filter}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  assignMedicalEmergency(assignMedicalEmergencyData) {
    var url = `${serverUrl}/medical-team/assign-medical-emergency`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, assignMedicalEmergencyData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new MedicalTeamServices();
