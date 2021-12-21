const info = (...inputs) => {
  if (process.env.NODE_ENV !== 'test'){
    console.log(...inputs)
  }
}

const error = (...errors) => {
  if (process.env.NODE_ENV !== 'test'){
    console.error(...errors)
  }
}

module.exports = {
  info,
  error
}