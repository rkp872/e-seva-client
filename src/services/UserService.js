import axios from "axios";
import { serverUrl } from "./../const";
class UserService {
  registerUser(user) {
    const url = `${serverUrl}/register`;
    return axios.post(url, user);
  }
  loginUser(user) {
    const url = `${serverUrl}/login`;
    return axios.post(url, user);
  }
  forgotPassword(email) {
    const url = `${serverUrl}/forgot`;
    return axios.post(url, email);
  }
  resetPassword(password, token) {
    const url = `${serverUrl}/reset/${token}`;
    return axios.post(url, password);
  }
  verifyUser(token) {
    const url = `${serverUrl}/verify/${token}`;
    return axios.get(url);
  }
}

///reset
export default new UserService();
