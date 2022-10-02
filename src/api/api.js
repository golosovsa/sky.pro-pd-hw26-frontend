import axios from 'axios';
import { getCookie } from "../utils/cookies";

export default axios.create({
  baseURL: `http://skypro-pd-hw26.ru:5000/`,
  // withCredentials: true,
  headers: {
    Authorization: "Bearer " + getCookie("AccessToken")
  }
});
