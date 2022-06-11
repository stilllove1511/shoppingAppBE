import logRouter from './log'
import orderRouter from './order'
import productRouter from './product'
import userRouter from './user'
import accountRouter from './account'
import test1 from '../middlewares/test1'
import test2 from '../middlewares/test2'
import db from '../models/index'

const initAppRoutes = (app) => {
    app.use('/', logRouter)
    app.use('/order/', orderRouter)
    app.use('/product/', productRouter)
    app.use('/user/', userRouter)
    app.use('/account/', accountRouter)

    app.use('/seeder', async (req, res) => {
        db.Group.create({
            name: 'admin'
        })
        db.Group.create({
            name: 'user'
        })
        db.Role.create({
            url: '/user/create'
        })
        db.Role.create({
            url: '/user/read'
        })
        db.Role.create({
            url: '/user/update'
        })
        db.Role.create({
            url: '/user/destroy'
        })
        db.Role.create({
            url: '/product/create'
        })
        db.Role.create({
            url: '/product/read'
        })
        db.Role.create({
            url: '/product/update'
        })
        db.Role.create({
            url: '/product/destroy'
        })
    })
}

export default initAppRoutes

