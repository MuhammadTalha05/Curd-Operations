import express from 'express';
import connection from './Config/dbConnection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routing/routeing.js';
import bodyParser from 'body-parser';
const app = express();

app.use(cors())

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', router)

dotenv.config(); // initilize env ko krwaya

const userName = process.env.DB_USERNAME;
const userPassword = process.env.DB_PASSWORD
const PORT = process.env.PORT

connection(userName,userPassword);

app.listen(PORT, ()=>{
    console.log(`Our port is listing on ${PORT}`);
})