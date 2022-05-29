import express from "express"
import logController from "../controllers/logController"

const log = express.Router()

log.post('/register', logController.handleRegister)
log.post('/login', logController.handleLogin)

export default log

