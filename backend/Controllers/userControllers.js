import { userSchemaModel } from "../Models/userScheme.js";

// export const addUser = async(req,res)=>{
//     const user = req.body;
//     const newUser = new userSchemaModel(user)
//     try{
//        await newUser.save();
//        res.status(201).json(newUser)
//     }
//     catch(error){
//         res.status(409).json({message:error.message})
//     }
// }

export const addUser = async(req, res)=>{
    try{
        const newUser = new userSchemaModel({
            // userName:req.body.userName,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            phoneNo:req.body.phoneNo,
            emailAddress:req.body.emailAddress,
            password:req.body.password,
        })

        await newUser.save();
        res.status(200).json(newUser)

    }
    catch(error){
        res.status(400).json({message:error.message})
    }

}

export const alldata = async(req,res)=>{
    try{
       let userData = await userSchemaModel.find({});
       res.status(200).json(userData);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}


export const singleuser = async(req, res)=>{

    const {id} = req.params;
    try{
        const singleUserData = await userSchemaModel.findById(id)
        res.status(200).json(singleUserData)
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}


export const editUser = async(req,res)=>{
    try{
        // const editSingleUser = new userSchemaModel({
            //     firstName:req.body.firstName,
            //     lastName:req.body.lastName,
            //     phoneNo:req.body.phoneNo,
            //     emailAddress:req.body.emailAddress,
            //     password:req.body.password,
            // })
            
            // await userSchemaModel.updateOne({_id: req.params.id}, edituser);
        const {id} = req.params;
        const user = req.body;
        const editSingleUser = new userSchemaModel(user);
        await userSchemaModel.findByIdAndUpdate(id, editSingleUser)
        res.status(200).json(editSingleUser)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}


export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    const user = req.body;
    try{
        const deleteSingleUser = new userSchemaModel(user);
        await userSchemaModel.findByIdAndDelete(id, deleteSingleUser)
        res.status(200).json(deleteSingleUser);
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
}