const router = require('express').Router()
module.exports = (app) => {

  router.get('/google', app.action.Register.registerWithGoogle)

  return router
}