import React from 'react';
import { useState,useEffect} from "react";

const EditEmployee = ({employeeData,handleEditSave,handleCancel}) => {
    const [editEmployee, setEditEmployee] = useState({});
    useEffect(() => {
    setEditEmployee(employeeData);
     },[]);
    const handleEmployeeChange = (event) => {
        event.preventDefault()

      const name = event.target.name;
      const value = event.target.value;
      setEditEmployee(values => ({...values, [name]: value}))
      console.log(editEmployee);
     
    }
    return (
        <tr  key={editEmployee.businessEntityId}>
        <td> <input type="text" hidden  name="businessEntityId" value={editEmployee.businessEntityId || ""} onChange={handleEmployeeChange}   className="form-control form-control-lg"
           placeholder="Enter Id" /></td>
        <td><input type="text"  name="loginId" value={editEmployee.loginId || ""} onChange={handleEmployeeChange} className="form-control form-control-lg"
           placeholder="Enter login Id" /> </td>
        <td><input type="text"  name="jobTitle" value={editEmployee.jobTitle || ""} onChange={handleEmployeeChange}  className="form-control form-control-lg"
           placeholder="Enter job title" /></td>
        <td><input type="text"  name="gender" value={editEmployee.gender || ""} onChange={handleEmployeeChange}  className="form-control form-control-lg"
           placeholder="Enter gender" /></td>
        <td> <input type="date"  name="birthDate" value={editEmployee.birthDate || ""} onChange={handleEmployeeChange}  className="form-control form-control-lg"
           placeholder="Enter birth date" /></td>
        <td><button className="btn btn-primary" onClick={(event)=>handleEditSave(event,editEmployee)}  >Save</button><button className="btn btn-secondary" onClick={handleCancel}>Cancel</button></td>
      </tr>
    );
};

export default EditEmployee;