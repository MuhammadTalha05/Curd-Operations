import axios from 'axios';

const URL = "http://localhost:8000";

// Post User Into Db Api
export const addUser = async(data)=>{
    try{
        return await axios.post(`${URL}/add`, data );
        
    }
    catch(error){
        console.log(`Something Went Wrong ${error}`);
    }
}

// Get All Users Api
export const getUsers = async()=>{
    try{
        return await axios.get(`${URL}/alldata`)
    }
    catch(error){
        console.log(`Something Went Wrong ${error}`);
    }
}

// Get Single User By id Api
export const getUser = async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log(`Something Went Wrong ${error}`);
    }
}

// Edit User Api

export const editUser = async(data, id)=>{
    try{
        return await axios.put(`${URL}/${id}`, data)
    }
    catch(error){
        console.log(`Something Went Wrong ${error}`);
    }
}


// Delete user Data 
export const deleteUser = async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`)
    }
    catch(error){
        console.log(`Something Went Wrong ${error}`);
    }
}