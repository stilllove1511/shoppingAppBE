import express from "express"
import logController from "../controllers/logController"
import productController from '../controllers/productController'
import orderController from "../controllers/orderController"

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

    return app.use(router)
}

export default initAppRoutes

