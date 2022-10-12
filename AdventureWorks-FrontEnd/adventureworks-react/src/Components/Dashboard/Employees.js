
import Axios from "axios"
import { useState, useEffect, Fragment } from "react";
import EditEmployee from "./EditEmployee";
import ReadonlyEmployee from "./ReadonlyEmployee";
function Employees() {
    const [employeesData, setemployeesData] = useState([{}]);
    const [pageSize, setPageSize] = useState(20);
    const[pageNumber,setPageNumber]=useState(1);
    const [inputs, setInputs] = useState({});
    const[paginationArray,setpaginationArray]=useState([]);
   let paginationArrays=[];
    
    const [businessEntityId, setBusinessEntityId] = useState("");
    //const isEdit = false;
    const GetEmployeeDataFromApi=()=>{
        // function GetEmployeeDataFromApi() {
            // useEffect(() => {
     
                 Axios({
                     method: 'post',
                     url: 'https://localhost:7003/api/Employees/GetEmployees',
                     data: {
                         pageNumber: pageNumber,
                         pageSize: pageSize
                     },
                     headers: { "Authorization": "bearer " + localStorage.getItem('token'), "Content-Type": "application/json" },
                 })
                     .then(function (response) {
                         if (response.data) {
                             setemployeesData(response.data);
                             console.log(employeesData);
                             if (paginationArray.length == 1 || paginationArray.length == 0) {
                                 for (let index = 0; index < index == pageNumber || index < pageNumber * 10; index++) {
     
                                     paginationArray.push(index + 1);
     
                                 }
                             }
                             console.log(paginationArray);
                             setpaginationArray(paginationArray);
                         }
                     })
                     .catch(function (error) {
                         alert(error.message);
                     });
            // }, []);
         }
    useEffect(() => {
        GetEmployeeDataFromApi();
       }, []);
     
    const handleChange = (event) => {
        event.preventDefault()

      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      console.log(inputs);
     
    }

   const handleAdd=(event)=>{
        event.preventDefault()
       let businessEntityId= parseInt(Math.random()*1000)
        const employe={
            
            businessEntity:{
                "businessEntityId": businessEntityId,
                "personType": "EM",
                "nameStyle": true,
                "title": "",
                "firstName": "ss",
                "middleName": "ss",
                "lastName": "ss",
                "suffix": "Mr",
                "emailPromotion": 0,
                "additionalContactInfo": "",
                "demographics": "",
                "rowguid": parseInt(Math.random()*1000)+"251e5-96a3-448d-981e-0f99d789110d",
                "modifiedDate": new Date().toJSON().slice(0,10)
            },
            businessEntityId:businessEntityId,
            currentFlag:true,
            employeeDepartmentHistories:[],
            employeePayHistories:[],
            gender:inputs.gender,
            hireDate:new Date().toJSON().slice(0,10),
            jobCandidates:{},
            jobTitle:inputs.jobTitle,
            loginId:inputs.loginId,
            maritalStatus:"M",
            modifiedDate:new Date().toJSON().slice(0,10),
            nationalIdnumber: parseInt(Math.random()*1000000000),
            organizationLevel:3,
            purchaseOrderHeaders:[],
            rowguid:parseInt(Math.random()*1000)+"251e5-96a3-448d-981e-0f99d789110d",
            salariedFlag:true,
            sickLeaveHours:50,
            vacationHours:99,
            employeeDepartmentHistories:[],
            employeePayHistories:[],
            jobCandidates:[],
            purchaseOrderHeaders:[]

        }

     const newEmployee=[...employeesData,employe]
     setemployeesData(newEmployee);
    //  Axios({
    //     method: 'post',
    //     url: 'https://localhost:7003/api/Employees/PostEmployee',
    //     data: employe,
    //     headers: { "Authorization": "bearer " + localStorage.getItem('token'), "Content-Type": "application/json" },
    // })
    //     .then(function (response) {
    //         if (response.data) {
    //           // setemployeesData(response.data);
    //           //return response.data;
    //         }
    //        })
       
    //    .catch(function (error) {
    //        alert(error.message);
    //    });
   
     setInputs({});
    }

    const handleEdit=(event,employee)=>{
        event.preventDefault()
        setBusinessEntityId(employee.businessEntityId)
    }

    const handleEditSave=(event,employee)=>{
        event.preventDefault()
        console.log(employee)
        setBusinessEntityId(null);
        const allEmployeeData=[...employeesData];
        let index=allEmployeeData.findIndex((x)=>x.businessEntityId==employee.businessEntityId);
        allEmployeeData[index]=employee;
        setemployeesData(allEmployeeData);
       
    }
    const handleCancel=(event)=>{
        event.preventDefault()
        setBusinessEntityId(null);  
    }

   const handleDelete=(employee)=>{
        //event.preventDefault()
        console.log(employee)
        setBusinessEntityId(null);
        const allEmployeeData=[...employeesData];
        let index=allEmployeeData.findIndex((x)=>x.businessEntityId==employee.businessEntityId);
        allEmployeeData.splice(index,1);
        setemployeesData(allEmployeeData);
       
    }

    const handlePaginationClick=(pgNumber)=>
    {
       setPageNumber(pgNumber);
       GetEmployeeDataFromApi();
       console.log(employeesData);
      
    }

    const CheckAllData=()=>{
        console.log(employeesData);
    }


    return (
      <>
<div className="container">
  <div className="row">
    <div className="col">
       <input type="text" hidden name="businessEntityId" value={inputs.businessEntityId || ""} onChange={handleChange} className="form-control form-control-lg"
           placeholder="Enter Id" />
           </div>
           <div className="col">
       <input type="text"  name="loginId" value={inputs.loginId || ""} onChange={handleChange} className="form-control form-control-lg"
           placeholder="Enter login Id" />
           </div>
           <div className="col">
       <input type="text"  name="jobTitle" value={inputs.jobTitle || ""} onChange={handleChange} className="form-control form-control-lg"
           placeholder="Enter job title" />
           </div>
           <div className="col">
       <input type="text"  name="gender" value={inputs.gender || ""} onChange={handleChange} className="form-control form-control-lg"
           placeholder="Enter gender" />
           </div>
           <div className="col">
       <input type="date"  name="birthDate" value={inputs.birthDate || ""} onChange={handleChange} className="form-control form-control-lg"
           placeholder="Enter birth date" />
           </div>
           <div className="col">
           <button className="btn btn-secondary" onClick={handleAdd}>Add Employee</button> 
           </div>
           </div>
           </div>
       <table className="table">
  <thead>
    <tr key='123333333'>
      <th scope="col">Id</th>
      <th scope="col">Login Id</th>
      <th scope="col">Job Title</th>
      <th scope="col">Gender</th>
      <th scope="col">Birth Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {employeesData.map((employeeData) =>
  <Fragment>
    { businessEntityId==employeeData.businessEntityId ? <EditEmployee employeeData={employeeData} handleEditSave={handleEditSave} handleCancel={handleCancel}></EditEmployee> :
     <ReadonlyEmployee employeeData={employeeData} handleEdit={handleEdit} handleDelete={handleDelete} />
    }
    </Fragment>
  )}
   
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    {paginationArray.map((pagination) =>
    <>
    <li className="page-item"><a className="page-link" href="#" onClick={(event)=>handlePaginationClick(pagination)}>{pagination}</a></li>
    
    </>
    )
    }
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>

       </>
    );
    
  }
  const GetEmployeeDataFromApi2=(setemployeesData,pgNumber)=>{
    // function GetEmployeeDataFromApi() {
        // useEffect(() => {
           
           let pgno=pgNumber;
             Axios({
                 method: 'post',
                 url: 'https://localhost:7003/api/Employees/GetEmployees',
                 data: {
                     pageNumber:pgno ,
                     pageSize: 20
                 },
                 headers: { "Authorization": "bearer " + localStorage.getItem('token'), "Content-Type": "application/json" },
             })
                 .then(function (response) {
                     if (response.data) {
                        setemployeesData(response.data);
                       return response.data;
                     }
                    })
                
                .catch(function (error) {
                    alert(error.message);
                });
            }
  
  export default Employees;
  