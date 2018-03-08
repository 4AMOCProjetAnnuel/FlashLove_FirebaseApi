module.exports = (app) => {

    app.action = {
        User : require('./user')(app)
    }

}