import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
app.use(express.json());  //all the request will be passed using json
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // ya jo frontend ka origin hai
    credentials: true,
  }));
  

//Api endpoints
app.get('/',(req,res)=>{
    res.send("Api Working")
})
app.use('/api/auth',authRouter)
app.listen(port,()=>{
    console.log(`Server started on PORT:${port}`)
})
