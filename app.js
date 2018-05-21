const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const corsConfig = require('./configs/cors.config');

// configs

require('dotenv').config();
require('./configs/db.config');

const phonesRoutes = require('./routes/phones.routes');

var app = express();

app.use(cors(corsConfig));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes

app.use('/phones', phonesRoutes);

// catch 404 and forward to error handler
app.use((req, res, next)  => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message || '' });
});

module.exports = app;
