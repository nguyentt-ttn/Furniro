import express from 'express'
import { login, register, UserList} from '../controllers/auth'
const authRouter = express.Router()
authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.get("/users", UserList)
export default authRouter