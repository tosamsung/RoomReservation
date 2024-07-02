import axios from "axios";
import UserAuth from"../service/UserAuth"
const api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080",
  });
  api.interceptors.response.use(
    async (response) => {
      if(response.data.statusCode===401){
        await UserAuth.refreshToken();
        return api(response.config)
      }
      // console.log(response);
      return response;
    },
     (error) => {
      return Promise.reject(error);
    }
  );
  export default api;
