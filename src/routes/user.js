import express from "express"

const user = express.Router()

user.get('/test', (req, res) => {
    return res.send('test user route')
})

export default user