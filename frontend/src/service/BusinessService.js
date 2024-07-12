import api from "../util/ApiUtil";
class BuisnessService {
  static async createBusiness(business) {
    try {
      const response = await api.post(`/business/create`, business);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default BuisnessService;