import api from "../util/ApiUtil";
class AdminAuthService {

  static async signin(userData) {
    try {
      const response = await api.post(`/auth/admin/signin`, userData);
      console.log(response);
      
      return response;
    } catch (error) {
      throw error;
    }
  }

}
export default AdminAuthService;
