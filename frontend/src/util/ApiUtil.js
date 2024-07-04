import axios from "axios";
import UserAuth from "../service/UserAuth";
const api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080",
});
api.interceptors.response.use(
  async (response) => {

    if (response.data.statusCode === 401 && response.data.error == "Refresh") {
      await UserAuth.refreshToken();
      return api(response.config);
    }

    // console.log(response);
    return response;
  },
  (error) => {
    if (!error.response) {
      console.error('Network error. Server not reachable.');
      throw error;
    }
    return Promise.reject(error);
  }
);
export default api;
