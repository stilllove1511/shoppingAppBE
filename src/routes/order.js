import express from "express"
import orderController from "../controllers/orderController"
import jwtMiddleware from '../middlewares/JWTAction'

const orderRouter = express.Router()

orderRouter.get('/read', jwtMiddleware.checkUserJWT, orderController.read)
orderRouter.post('/create', jwtMiddleware.checkUserJWT, orderController.create)
orderRouter.delete('/destroy', jwtMiddleware.checkUserJWT, orderController.destroy)

export default orderRouter