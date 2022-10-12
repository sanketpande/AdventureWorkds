import React from 'react';
import { useState } from 'react';

const ReadonlyEmployee = ({employeeData,handleEdit,handleDelete}) => {
    const [deleteId, setdeleteId] = useState(false);
    const toggleDelete=(event,businessEntityId)=>{
        
       setdeleteId(businessEntityId);
        
    }
    const handleDeletePopOver=()=>{
          handleDelete(employeeData)
    }
    return (
        <>
        <tr  key={employeeData.businessEntityId}>
        <td>{employeeData.businessEntityId}</td>
        <td>{employeeData.loginId}</td>
        <td>{employeeData.jobTitle}</td>
        <td>{employeeData.gender}</td>
        <td>{employeeData.birthDate}</td>
        <td>
        <button className="btn btn-primary" onClick={(event)=>handleEdit(event,employeeData)}>Edit</button>
        
       <button className="btn btn-danger" onClick={(event)=>handleDelete(employeeData)} >Delete</button>
       </td>
      </tr>
      
      

      </>
    );
};

export default ReadonlyEmployee;