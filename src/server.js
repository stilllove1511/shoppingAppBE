import express from 'express'
import bodyParser from 'body-parser'

import initAppRoutes from './routes/index'

require('dotenv').config()

const app = express()

const hostname = process.env.HOST_NAME
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

initAppRoutes(app)


app.use((req, res) => {
    return res.send('hi :)')
})

app.listen(PORT, hostname, () => {
    console.log(`Server is running on site ${hostname}:${PORT}`)
})