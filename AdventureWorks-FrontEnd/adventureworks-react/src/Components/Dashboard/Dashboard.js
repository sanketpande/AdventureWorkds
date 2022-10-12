
import Axios from "axios"
import { useParams } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MyProfile from "./MyProfile";
import Navbar from "./Navbar";
function Dashboard() {
  
 const navigate = useNavigate();
   // alert("sss")
    const { id } = useParams()
    const [employeData, setemployeData] = useState({});
    var employeeData={};
   
  
useEffect(() => {
 
  Axios({
    method: 'get',
    url: 'https://localhost:7003/api/Employees/'+id,
    
    headers: { "Authorization":"bearer "+localStorage.getItem('token')},
})
.then(function (response) {
    if(response.data)
    {
      //setemployeData(response.data);
      setemployeData(employeData => ({

        ...employeData,
  
        ...response.data
  
        }));
      //console.log(employeData);
      navigate('/AllEmployees');
    }
})
.catch(function (error) {
  alert(error.message)
})
  },[]);
  
  return (
   <>
   <h1>{employeData.gender}</h1>
   {/* <MyProfile profileData={employeeData}></MyProfile> */}
   </>
    
  );
 
}


export default Dashboard;
