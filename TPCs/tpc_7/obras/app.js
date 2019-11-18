const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const obrasRouter = require('./routes/obras');
const compositoresRouter = require('./routes/compositores');
const apiRouter = require('./routes/api');

const app = express();

// --- Database connection [MongoDB] 

var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/obras', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Mongo ready : ' + mongoose.connection.readyState))
        .catch((erro => console.log('Mongo Error: ' + erro)))

// --- 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/obras', obrasRouter);
app.use('/compositores', compositoresRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
