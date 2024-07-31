import api from "../util/ApiUtil";
class AdminService {
  static async getAll() {
    try {
      const response = await api.get(`admins`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default AdminService;
