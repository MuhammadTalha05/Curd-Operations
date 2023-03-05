import mongoose from 'mongoose';

const connection = async(userName,userPassword)=>{
    const URL = `mongodb+srv://${userName}:${userPassword}@curs-web-application.6588msl.mongodb.net/test?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
        console.log("Database Connected Sucessfuly");
    }
    catch(error){
        console.log(`Error while connecting to DataBase: ${error}`);
    }
}

export default connection;