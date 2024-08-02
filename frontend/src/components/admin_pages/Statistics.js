import { useEffect, useState } from "react"
import { groupByUserRegister } from "../../service/StatisticsService";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
export const StatisticsPage = () => {
    const [listUserMonth, setListUserMonth] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear())
    const [arrayYear, setArrayYear]=useState([])
    useState(()=>{
        const yearr=new Date().getFullYear();
        const array=[]
        for(let i=2000; i<=yearr; i++){
            array.push(i);
        }
        setArrayYear(array)
    },[])
    useEffect(() => {
        fetchGetListUserMonth()
    }, [year])
    const fetchGetListUserMonth = () => {
        groupByUserRegister(year).then((data) => {
            console.log(data);
            setListUserMonth(data.data)
        })
    }
    return (
        <>
        <select value={year} onChange={(e)=>setYear(e.target.value)}>
            {arrayYear.map((year)=><option value={year}>{year}</option>)}
        </select>
        {arrayYear?.length>0 && <BarChart width={1000} height={300} data={listUserMonth.map((item) => ({
            name: `${item.month}/${item.year}`, // You can customize the name as needed
            user: item.userCount,    // Example calculation, adjust as necessary
        })).reverse()}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="user" fill="#8884d8" barSize={30} />
        </BarChart>
        }
        </>
    )
}