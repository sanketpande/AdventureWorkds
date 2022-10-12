import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import MyProfile  from './Components/Dashboard/MyProfile';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route,Routes, Link,useLocation} 
        from "react-router-dom";
import Navbar from './Components/Dashboard/Navbar';
import Employees from './Components/Dashboard/Employees';

function App() {
 // const  localation=useLocation();
  
  return (
    <>
    <div>
     
    <Router>
    
    <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard/:id"  element={<Dashboard />} />
          {/* <Route path="Dashboard" element={<Dashboard />}>
             <Route path=":Id" element={<Dashboard />} />
          </Route> */}
            <Route exact path="MyProfile" element={<MyProfile />} />
            <Route exact path="AllEmployees" element={<Employees />} />
            
            <Route path="*" element={<Login />} />
       
        {/* <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </div> */}
        </Routes>
      </Router>
      </div>
      </>
    
  );
}

export default App;
