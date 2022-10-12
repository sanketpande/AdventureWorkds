
import { useState } from "react";
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
function Login() {

 const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
       // Axios.get("https://api.publicapis.org/entries").then().then((response)=>{
      //  console.log(response);
      //   Axios
      // .post("https://localhost:7003/api/Employees/Login", {
      //   LoginID: inputs.LoginID,
      //   Password: "asdasdasd"
      // })
      // .then((response) => {
      //   console.log(response.data);
      // });
      Axios({
        method: 'post',
        url: 'https://localhost:7003/api/Employees/Login',
        data: {
        LoginID: inputs.LoginID,
        Password: "asdasdasd"
      },
        headers: { "Content-Type": "application/json" },
    })
    .then(function (response) {
        if(response.data)
        {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('BusinessEntityId', response.data.businessEntityId)
          navigate('/Dashboard'+"/"+response.data.businessEntityId);
        }
    })
    .catch(function (error) {
      alert(error.message)
    });
       // })
        
      }
      const [inputs, setInputs] = useState({});
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

  return (
    
    <>
    <section className="vh-100">
<div className="container-fluid h-custom">
 <div className="row d-flex justify-content-center align-items-center h-100">
   <div className="col-md-9 col-lg-6 col-xl-5">
     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
       className="img-fluid" alt="Sample image" />
   </div>
   <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
     <form onSubmit={handleSubmit}>
        
       <div className="form-outline mb-4">
         <input type="text" name="LoginID" value={inputs.LoginID || ""} onChange={handleChange}   className="form-control form-control-lg"
           placeholder="Enter a valid LoginID address" />
         <label className="form-label">LoginID address</label>
       </div>

       
       <div className="form-outline mb-3">
         <input type="password"  name="password" value={inputs.password || ""} onChange={handleChange} className="form-control form-control-lg"
           placeholder="Enter password" />
         <label className="form-label" >Password</label>
       </div>

       

       <div className="text-center text-lg-start mt-4 pt-2">
         <button type="submit" className="btn btn-primary btn-lg"
          >Login</button>
        
       </div>

     </form>
   </div>
 </div>
</div>
<div
 className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
 
 <div className="text-white mb-3 mb-md-0">
   Copyright © 2020. All rights reserved.
 </div>
 
 <div>
   <a href="#!" className="text-white me-4">
     <i className="fab fa-facebook-f"></i>
   </a>
   <a href="#!" className="text-white me-4">
     <i className="fab fa-twitter"></i>
   </a>
   <a href="#!" className="text-white me-4">
     <i className="fab fa-google"></i>
   </a>
   <a href="#!" className="text-white">
     <i className="fab fa-linkedin-in"></i>
   </a>
 </div>
 
</div>
</section>
   </>
  );
}

export default Login;
