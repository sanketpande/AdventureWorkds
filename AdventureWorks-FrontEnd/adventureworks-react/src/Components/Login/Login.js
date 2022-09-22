
import { useState } from "react";
function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        
        
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
         <input type="email" name="email" value={inputs.email || ""} onChange={handleChange}   className="form-control form-control-lg"
           placeholder="Enter a valid email address" />
         <label className="form-label">Email address</label>
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
