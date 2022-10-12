import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { useParams } from 'react-router-dom'
function MyProfile(props) {
   console.log("PrpfileDta "+props.profileData);
   const { id } = useParams()
   
   
   console.log("Profile "+id)
    return (
      <>
       
       <table className="table">
  
  <tbody>
    <tr>
      <th >1</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th >2</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th >3</th>
      <td >Larry the Bird</td>
    </tr>
  </tbody>
</table>
       </>
    );
  }
  
  export default MyProfile;
  