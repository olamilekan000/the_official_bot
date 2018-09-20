'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./route/index'));

app.listen(process.env.PORT || 9001, () => { console.log("server's up!") });