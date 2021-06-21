import axios from "axios";
import { serverUrl } from "./../const";
class CommonPeopleService {
  getOwnTrafficViolation(filter) {
    var url = `${serverUrl}/common-people/my-offense/${filter}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  searchByEmail(email) {
    var url = `${serverUrl}/common-people/traffic-violator-by-email`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, email, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // //payment-receipt-data
  getPaymentData(email) {
    var url = `${serverUrl}/common-people/payment-receipt-data`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, email, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  searchByDL(dl) {
    var url = `${serverUrl}/common-people/traffic-violator-by-dl`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, dl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  searchByReg(reg) {
    var url = `${serverUrl}/common-people/traffic-violator-by-reg`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, reg, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  finePayment(id) {
    var url = `${serverUrl}/common-people/fine-payment`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  trackPayment(transactionId) {
    var url = `${serverUrl}/common-people/track-payment/${transactionId}`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  saveMedicalEmergency(medicalEmergency) {
    var url = `${serverUrl}/common-people/register-medical-emergency`,
      user = JSON.parse(localStorage.getItem("login"));
    var token = user.token;
    return axios.post(url, medicalEmergency, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new CommonPeopleService();
