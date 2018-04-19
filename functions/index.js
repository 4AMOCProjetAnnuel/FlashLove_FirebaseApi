const functions = require('firebase-functions');
const app = require('express')();
const admin = require('firebase-admin');
const gcs = require('@google-cloud/storage');
const firebase = require('firebase');
const GoogleCloud = require('google-cloud')();

app.cloudFunctions = functions

app.gcs = GoogleCloud.storage({
  projectId: 'flashloveapi',
  keyFilename: "./serviceAccount.json",
})

app.gcs.interceptors.push({
  request: function(reqOpts) {
    reqOpts.forever = false
    return reqOpts
  }
})

app.bucket = app.gcs.bucket("flashloveapitest")

require('./model')(app);
require('./action')(app);
//require('./router')(app);

app.listen(3000, () => {
  console.log('App listening to port 3000');
})

app.use('/user', require('./test')(app))

/*
router.get('/hello',
  (req, res) => {
    res.status(200).send('It\'s Alright')
  }
)
*/
const api = app.cloudFunctions.https.onRequest(app)
//exports.app = app.cloudFunctions.https.onRequest(app)

module.exports = {
  api
}