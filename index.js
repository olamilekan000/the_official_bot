'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./route/index'));

exports.api = functions.https.onRequest(app);
app.listen(process.env.PORT || 9001, () => { console.log("server's up!") });