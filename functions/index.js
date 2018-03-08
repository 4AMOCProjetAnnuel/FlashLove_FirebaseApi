const functions = require('firebase-functions');
const app =  require('express')();
const admin = require('firebase-admin');
const qr = require('qr-image')
const gcs = require('@google-cloud/storage')();

app.qr = qr

app.cloudFunctions = functions
app.gcs = gcs

app.database = admin.initializeApp(
    functions.config().firebase
);

require('./model')(app);
require('./action')(app);

app.get('/user',
    app.action.User.create
)

exports.app = functions.https.onRequest(app)