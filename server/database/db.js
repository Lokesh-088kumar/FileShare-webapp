import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DBconnection = async()=>{
    const MONGO_URL = process.env.MONGO_URL;
    //const MONGO_URL="mongodb+srv://<username>:<password>@cluster0.brjfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    try {
        await mongoose.connect(MONGO_URL);
        console.log("database connected sucessfully");
    } catch (error) {
        console.error('error while connecting with database',error.message);
    }
}

export default DBconnection;