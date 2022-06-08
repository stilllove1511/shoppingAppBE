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

    app.use('/test', test1, test2, async (req, res) => {
        console.log('controller: ', req.passvar)
        res.send('ok')
    })
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

