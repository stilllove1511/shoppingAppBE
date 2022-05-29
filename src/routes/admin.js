import express from "express"

const admin = express.Router()

admin.get('/test', (req, res) => {
    return res.send('test admin route')
})

export default admin