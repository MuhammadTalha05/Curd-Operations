import React from 'react'
import { Routes , Route} from 'react-router-dom';
import EditUser from '../Pages/EditUser'
import AddUser from '../Pages/AddUser';
import Dashbaord from '../Pages/Dashbaord';



const Routess = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashbaord />} /> 
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
    </Routes>
  )
}

export default Routess