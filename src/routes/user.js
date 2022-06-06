import express from "express"
import userController from '../controllers/userController'
import jwtMiddleware from '../middlewares/JWTAction'

const userRouter = express.Router()

userRouter.post('/create', jwtMiddleware.checkUserJWT, jwtMiddleware.checkUserPermission, userController.create)
userRouter.get('/read', jwtMiddleware.checkUserJWT, jwtMiddleware.checkUserPermission, userController.read)
userRouter.put('/update', jwtMiddleware.checkUserJWT, jwtMiddleware.checkUserPermission, userController.update)
userRouter.delete('/destroy', jwtMiddleware.checkUserJWT, jwtMiddleware.checkUserPermission, userController.destroy)

export default userRouter
