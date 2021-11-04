const logger = require('./logger')

const unknownHandler = (request, response) => response.status(404).send('Unknown Endpoint')

const errorHandler = (error, request, response, next) => {
  logger.error(error)
  if (error.name === 'CastError'){
    response.status(400).send({
      error : 'Malformatted ID'
    })
  }
  else if (error.name === 'ValidationError'){
    response.status(400).send(error.message)
  }
  else if (error.name === 'JsonWebTokenError'){
    response.status(401).send({
      error: 'Invalid or missing authorization token'
    })
  }
  else{
    response.status(500).end()
  }
  next(error)
}

module.exports = {
  unknownHandler,
  errorHandler
}