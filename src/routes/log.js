import express from "express"

const log = express.Router()

log.get('/register', (req, res) => {
    return res.send('register')
})

log.get('/login', (req, res) => {
    return res.send('login')
})

export default log

