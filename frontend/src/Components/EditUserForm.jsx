import React, { useState , useEffect} from "react";
import {editUser} from '../Service/api.js';
import {useNavigate, useParams} from 'react-router-dom';
import {getUser} from '../Service/api'


const EditUserForm = () => {
 

  const [user, setUser] = useState({
    // userName:"",
    firstName:"",
    lastName:"",
    phoneNo:"",
    emailAddress:"",
    password:"",

  })

  const onValueChange = (e)=>{
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user);
  }

  const editUserHandler = (e) =>{
    e.preventDefault();
    editUser(user, id);
    navigate('/')
  }


  const navigate = useNavigate();
  const {id} = useParams()


  useEffect(()=>{
    getSingleUser();
  },[])

  const getSingleUser = async()=>{
    const res = await getUser(id);
    setUser(res.data);
  }


  return (
    <div className="container w-50">
      <div className="row">
        <div className="col-md-12 p-2">
        <h1 className="text-center p-2">EDIT USER</h1>
          <form>

            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                required
                onChange={onValueChange}
                value={user.firstName}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                required
                onChange={onValueChange}
                value={user.lastName}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNo" className="form-label">
                Phone No
              </label>
              <input
                type="number"
                className="form-control"
                id="phoneNo"
                name="phoneNo"
                required
                onChange={onValueChange}
                value={user.phoneNo}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                name="emailAddress"
                required
                onChange={onValueChange}
                value={user.emailAddress}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="accountPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="accountPassword"
                name="password"
                required
                onChange={onValueChange}
                value={user.password}
              />
            </div>
            <button type="submit" onClick={editUserHandler} className="btn btn-dark w-100 btn-lg">
                EDIT USER Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default EditUserForm