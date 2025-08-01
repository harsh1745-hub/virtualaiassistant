import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./Config/db.js"
import authRouter from "./Routes/authRoutes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./Routes/userRoute.js"
import geminiResponse from "./gemini.js"


const app=express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(port,()=>{
    connectDb()
    console.log("server started")
})

