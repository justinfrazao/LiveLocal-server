const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

//middlewares and endpoints
const middlewares = require('./middlewares/middlewares');
// const logs = require('./api/logs');
// const posts = require('./api/posts');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(helmet());
app.use(express.json());

app.get('/', async (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

// app.use('/api/logs', logs);
// app.use('/api/posts', posts);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;