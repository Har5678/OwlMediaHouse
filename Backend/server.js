import express from "express"
import cors from "cors"
import userRouter from "./Router/UserRouter.js";
import "dotenv/config"
import connectDB from "./config/mogodb.js";
import {blogsRouter} from "./Router/BlogRouter.js";
import { emailRouter } from "./Router/emailRouter.js";


const app=express();
const port=process.env.PORT || 4000
connectDB();


app.use(cors());
app.use(express.json());


app.use("/uploads", express.static("uploads"));


app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.use("/api/user",userRouter);
app.use("/api/blogs",blogsRouter);
app.use("/api", emailRouter);


app.listen(port,()=>console.log("server started on PORT : " + port))