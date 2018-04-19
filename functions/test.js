const router = require('express').Router()

module.exports = (app) => {

  router.get('/hello', (req, res) => {
    res.send('It is Alright')
  })

  return router

}