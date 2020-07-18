const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/test', authRoute);

module.exports = app;
