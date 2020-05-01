if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
console.log('db ', db);
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to mongoose'));

app.use(bodyParser.urlencoded({ extended: false }));

const indexRouter = require('./src/routes/index');

app.use('/', indexRouter);

const notFoundRouter = require('./src/routes/notfound');

app.use('*', notFoundRouter);

app.listen(process.env.PORT || 3007);
