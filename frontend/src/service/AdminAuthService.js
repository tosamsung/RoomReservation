import api from "../util/ApiAdminUtil";
class AdminAuthService {

  static async signin(userData) {
    try {
      const response = await api.post(`/auth/admin/signin`, userData);      
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async validate() {
    try {
      const response = await api.post(`/auth/admin/validate`);            
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async refreshToken() {
    try {
      const response = await api.post(`/auth/admin/refreshToken`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
export default AdminAuthService;
