import express from "express"
import { askToAssistant, getCurrentUser, updateAssistant } from "../Controllers/userController.js"
import isAuth from "../Middelwares/isAuth.js"
import upload from "../Middelwares/multer.js"

const userRouter=express.Router()

userRouter.get("/current",isAuth,getCurrentUser)
userRouter.post("/update",isAuth,upload.single("assistantImage"),updateAssistant)
userRouter.post("/asktoassistant",isAuth,askToAssistant)

export default userRouter