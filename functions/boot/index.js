module.exports = (app) => {
    return {
       fixtures:  require('./fixtures')(app)
    }
}