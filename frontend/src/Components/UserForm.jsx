import React, { useState } from "react";
import {addUser} from '../Service/api.js'
import {useNavigate} from 'react-router-dom'

const UserForm = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName:"",
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

  const addUserHandler = (e) =>{
    e.preventDefault();
    addUser(user);
    navigate('/')
  }

  return (
    <div className="container w-50">
      <div className="row">
        <div className="col-md-12 p-2">
        <h1 className="text-center p-2">ADD USER</h1>
          <form>
            {/* <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                onChange={onValueChange}
              />
            </div> */}

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
              />
            </div>
            <button type="submit" onClick={addUserHandler} className="btn btn-dark w-100 btn-lg">
                ADD NEW USER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
