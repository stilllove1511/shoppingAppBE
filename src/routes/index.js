import logRouter from './log'
import orderRouter from './order'
import productRouter from './product'
import userRouter from './user'
import accountRouter from './account'
import db from '../models/index'

const initAppRoutes = (app) => {
    app.use('/', logRouter)
    app.use('/order/', orderRouter)
    app.use('/product/', productRouter)
    app.use('/user/', userRouter)
    app.use('/account/', accountRouter)

    // app.use('/test', async (req, res) => {
    //     let data = await db.User.updateOne(
    //         { _id: '629dd4b3d92a1573663ef1e8' },
    //         {
    //             password: 'eqw'
    //         }
    //     )

    //     res.status(200).json({
    //         DT: data
    //     })
    // })

    // app.use('/cg', async (req, res) => {
    //     db.Group.create({
    //         name: 'ad'
    //     })
    // })
}

export default initAppRoutes

