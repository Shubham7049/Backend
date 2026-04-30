import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const ConnectDB= async()=>{
    try
    {
       const connectionInstances=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`Database Connected !!DB HOST : ${connectionInstances.connection.host}`)
    }
    catch(error)
    {
       console.log("MONGO CONNECTION ERROR:",error);
       process.exit(1);
    }

}

export default ConnectDB;