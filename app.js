const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const router = require('./controllers/blogs')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(config.URL).then(() => logger.info('Connected to database')).catch(error => logger.error(error))

app.use('/api/blogs', router, middleware.unknownHandler, middleware.errorHandler)

module.exports = app