import mongoose from 'mongoose';
const {Schema} = mongoose;


const userSchema = new Schema({
    //  userName:String
    firstName:String,
    lastName:String,
    phoneNo:String,
    emailAddress:String,
    password:String,
})

export const userSchemaModel = mongoose.model('users',userSchema)