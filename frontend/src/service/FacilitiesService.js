import api from "../util/ApiUtil";
const getAllFacilities = async () => {
    try {
      const response = await api.get("/facilities");      
      return response;
    } catch (error) {
      console.error("There was an error fetching the facilities!", error);
      throw error;
    }
  };
  
  export default {
    getAllFacilities,
  };