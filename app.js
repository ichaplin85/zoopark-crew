const express = require('express');

const app = express();
require('dotenv').config();
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const checkAuth = require('./middleware/authMiddleware');

const PORT = process.env.MAIN_PORT || 3000;

const indexRouter = require('./routers/signin');
const checkRouter = require('./routers/check');
const tarifRouter = require('./routers/tarif');
const animalRouter = require('./routers/animal');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cookieParser());
//
const sessionConfig = {
  name: 'cookieName',
  secret: 'keyboard cat',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
  },
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionConfig));

// app.get('/', (req, res) => {
//   res.render('modal');
// });

// app.use((req, res, next) => {
//     const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
//     next(error);
// });

app.use('/', indexRouter);
app.use('/check', checkRouter);
app.use('/tariff', tarifRouter);
app.use('/animal', animalRouter);
app.get('/admin', checkAuth, (req, res) => {
  console.log('---------------------------');
  console.log(req.session);
  res.send('its ok');
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
