import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getUsers,deleteUser} from '../Service/api';


const AllUsers = () => {

  const [data, setData] = useState([])

  
  const getAllUsers = async()=>{
    const res = await getUsers();
    setData(res.data);
  }
  
  const deleteRecord = (id)=>{
    deleteUser(id);
  }
  
  useEffect(()=>{
    getAllUsers();
  },[deleteRecord])




  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 pt-3 pb-3">
          <h1 className="text-center">USER DASHBOARD</h1>
          <table className="table table-striped table-hover">
            
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                {/* <th scope="col">User Name</th> */}
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone No</th>
                <th scope="col">Email Address</th>
                <th scope="col">Password</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              
                {
                  data.map((val, index)=>{
                    return(
                      <tr key={index}>
                      <th scope="row">{index+1}</th>
                      {/* <td>{val.userName}</td> */}
                      <td>{val.firstName}</td>
                      <td>{val.lastName}</td>
                      <td>{val.phoneNo}</td>
                      <td>{val.emailAddress}</td>
                      <td>{val.password}</td> 
                     <td>
                      <Link to={`/edit/${val._id}`} className="btn btn-success" >Edit</Link> &nbsp;
                      <button className="btn btn-danger" onClick={()=> deleteRecord(val._id)}>Delete</button>
                     </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
