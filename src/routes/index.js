import log from './log'
import admin from './admin'
import user from './user'

const router = (app) => {
    app.use(log)
    app.use('/admin', admin)
    app.use('/user', user)
}

export default router

