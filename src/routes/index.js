import logRouter from './log'
import orderRouter from './order'
import productRouter from './product'
import userRouter from './user'
import db from '../models/index'

const initAppRoutes = (app) => {
    app.use('/', logRouter)
    app.use('/order/', orderRouter)
    app.use('/product/', productRouter)
    app.use('/user/', userRouter)

    // app.use('/test', async (req, res) => {
    //     let roles = await db.Group.findOne({
    //         _id: '629dcaf56c44dfd5ce701802'
    //     }, '-__v').populate('roles', '-__v')
    //     return res.status(200).json({ DT: roles ? roles : {} })
    // })

    // app.use('/cg', async (req, res) => {
    //     db.Group.create({
    //         name: 'ad'
    //     })
    // })
}

export default initAppRoutes

