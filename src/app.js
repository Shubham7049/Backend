import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express();


//CORS stands for Cross-Origin Resource Sharing,
//  and in backend middleware it is used to control which frontend applications (origins) are allowed to access your backend API.
app.use(cors(
   {
    
    origin:process.env.CORS_ORIGIN,
    Credential:true
  }
))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit="16kb"}))
app.use(express.static("public"))

app.use(cookieParser( ))


export default app;
// //or 
// export {app}