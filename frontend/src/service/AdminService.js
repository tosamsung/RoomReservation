import api from "../util/ApiUtil";
class AdminService {
  static async getAll() {
    try {
      const response = await api.get(`/admins`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async create(Admin) {
    try {
      const response = await api.post(`/admins`, Admin);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
export default AdminService;
