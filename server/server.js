import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

const port = process.env.PORT || 4000;
connectDB();
const allowedOrigins = ["http://localhost:5173"];
app.use(express.json()); //all the request will be passed using json
app.use(cookieParser());
app.use(
  cors({
    // ya jo frontend ka origin hai
    origin: allowedOrigins,
    credentials: true,
  })
);

//Api endpoints
app.get("/", (req, res) => {
  res.send("Api Working");
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.listen(port,()=>{
    console.log(`Server started on PORT:${port}`)
})
