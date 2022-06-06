import express from "express"
import productController from '../controllers/productController'
import JWTAction from "../middlewares/JWTAction"
import jwtMiddleware from '../middlewares/JWTAction'

const productRouter = express.Router()

productRouter.post('/create', jwtMiddleware.checkUserJWT, jwtMiddleware.checkUserPermission, productController.create)
productRouter.get('/read', productController.read)
productRouter.put('/update', jwtMiddleware.checkUserJWT, jwtMiddleware.checkUserPermission, productController.update)
productRouter.delete('/destroy', jwtMiddleware.checkUserJWT, jwtMiddleware.checkUserPermission, productController.destroy)

export default productRouter
