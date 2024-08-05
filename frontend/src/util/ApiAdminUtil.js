import axios from "axios";
import AdminAuthService from "../service/AdminAuthService";
const api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/admin",
});
api.interceptors.response.use(
  async (response) => {
    if (response.data.statusCode === 401 && response.data.error == "Refresh") {
      // Check if the retry count exists in the config, if not, initialize it
      response.config.retryCount = response.config.retryCount || 0;

      // Set the retry limit
      const RETRY_LIMIT = 3;

      if (response.config.retryCount < RETRY_LIMIT) {
        response.config.retryCount += 1;
        await AdminAuthService.refreshToken();
        return api(response.config);
      } else {
        // If retry limit exceeded, handle it appropriately
        return null;
      }
    }
    return response?.data??response;
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
