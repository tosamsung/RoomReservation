import api from "../util/ApiUtil";
const url="statistics";
const statisticsUserRegisterMonth=(year, month)=> {
        return api.get(`/${url}/user-register`, {params: {year, month}});
    }
const findTop12MonthsWithUserCount=()=> {
        return api.get(`/${url}/user-register/chart`);
    }

const groupByUserRegister=(year)=> {
        return api.get(`/${url}/user-register/chart/${year}`);
        
    }
export {statisticsUserRegisterMonth, findTop12MonthsWithUserCount,groupByUserRegister}