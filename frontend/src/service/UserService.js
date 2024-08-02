import api from "../util/ApiUtil";
class UserService {
  static async createUser(userData) {
    try {
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers(page = 0, size = 10) {
    try {
      const response = await api.get('/users', {
        params: { page, size }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async getUserById(id) {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async updateUser(id, userData) {
    try {
      const response = await api.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      await api.delete(`/users/${id}`);
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
