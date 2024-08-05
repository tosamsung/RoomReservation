import api from "../util/ApiUtil"
const basePatch="/booking"
class BookingService{
    static create=(data)=>{
       return api.post(basePatch, data);
    }   
    static update=(id, data)=>{
       return api.put(`${basePatch}/${id}`, data);
    }
    static getBookingStatus=()=>{
       return api.get(`${basePatch}/booking-status`); 
    }
    static getBookingList=()=>{
      return api.get(`${basePatch}`);
    }
    static deleteBooking=(id)=>{
      return api.delete(`${basePatch}/${id}`);
    }
}
export default BookingService;