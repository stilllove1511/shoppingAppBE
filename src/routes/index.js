import express from "express"
import logController from "../controllers/logController"
import productController from '../controllers/productController'
import orderController from "../controllers/orderController"
import userController from '../controllers/userController'

const router = express.Router()


const initAppRoutes = (app) => {
    router.post('/register', logController.handleRegister)
    router.post('/login', logController.handleLogin)

    router.post('/product/create', productController.create)
    router.get('/product/read', productController.read)
    router.put('/product/update', productController.update)
    router.delete('/product/destroy', productController.destroy)

    router.get('/order/read', orderController.read)
    router.post('/order/create', orderController.create)
    router.delete('/order/destroy', orderController.destroy)

    router.post('/user/create', userController.create)
    router.get('/user/read', userController.read)
    router.put('/user/update', userController.update)
    router.delete('/user/destroy', userController.destroy)

    return app.use(router)
}

export default initAppRoutes

