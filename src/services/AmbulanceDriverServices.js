import axios from "axios";
import { serverUrl } from "./../const";

class AmbulanceDriverServices {
  getAssignedMedicalEmergency() {
    var url = `${serverUrl}/ambulance-service/get-assigned-medical-emergency`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  medicalEmergencyServed(medicalEmergencyId) {
    var url = `${serverUrl}/ambulance-service/medical-emergency-served/${medicalEmergencyId}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  workingMedicalEmergency(emergencyId) {
    var url = `${serverUrl}/ambulance-service/working-status-medical-emergency/${emergencyId}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  doneMedicalEmergency(emergencyId) {
    var url = `${serverUrl}/ambulance-service/done-status-medical-emergency/${emergencyId}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new AmbulanceDriverServices();
