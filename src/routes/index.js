import express from "express"
import logController from "../controllers/logController"
import productController from '../controllers/productController'
import orderController from "../controllers/orderController"
import userController from '../controllers/userController'
import Group from '../models/group'
import Role from '../models/role'


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

    

    router.get('/test',async (req, res) => {
        let roles = await Group.findOne({id:'629ccd4c2bd2c987e34d28c5'}).populate('roles')
        return res.status(200).json({DT:roles ? roles : {}})
    })


    // router.get('/create-role',async (req, res) => {
    //     Role.create({
    //         url:'/product/create'
    //     })
    //     await Role.create({
    //         url:'/product/read'
    //     })
    //     await Role.create({
    //         url:'/product/update'
    //     })
    //     await Role.create({
    //         url:'/product/destroy'
    //     })

    //     Role.create({
    //         url:'/user/create'
    //     })
    //     await Role.create({
    //         url:'/user/read'
    //     })
    //     await Role.create({
    //         url:'/user/update'
    //     })
    //     await Role.create({
    //         url:'/user/destroy'
    //     })
    // })

    return app.use(router)
}

export default initAppRoutes

