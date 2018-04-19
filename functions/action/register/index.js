module.exports = (app) => {

  function registerWithGoogle(req, res) {
    res.status(200).send('It\'s Alright')
  }

  return {
    registerWithGoogle
  }

}