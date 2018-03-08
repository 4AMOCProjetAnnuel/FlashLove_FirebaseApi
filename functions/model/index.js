module.exports = (app) => {

    app.model = {
        User : require('./user')(app)
    }
}