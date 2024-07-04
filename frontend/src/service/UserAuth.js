import api from "../util/ApiUtil";
class UserAuthService {
  static async signup(userData) {
    try {
      const response = await api.post(`/auth/signup`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async signin(userData) {
    try {
      const response = await api.post(`/auth/signin`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async validate() {
    try {
      const response = await api.post(`/auth/validate`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async refreshToken() {
    try {
      const response = await api.post(`/auth/refreshToken`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default UserAuthService;
