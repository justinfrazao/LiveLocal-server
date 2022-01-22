const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});