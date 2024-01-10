const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const supabase = require('./config/db')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const app = express();
const mahasiswa = require('./mahasiswa.controller');


const port = process.env.PORT;

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {maxAge: 60000}
// }))
// app.use(flash());
// app.use(methodOverride("_method"));
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



app.use('/mahasiswa', mahasiswa);

app.listen(port, () => {
  console.log(`express running on port ${port}`)
})

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