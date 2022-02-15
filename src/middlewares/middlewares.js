//401 Unauthorized - bad/no credentials
//403 Forbidden - valid credentials, but not adequate access
//  403 will happen inside the endpoint, not the middleware
import { getAuth } from 'firebase-admin/auth';
import app from '../firebase';

const auth = getAuth(app);

const authorizeToken = (req, res, next) => {
  if (req.get('authorization')) {
    auth.verifyIdToken(req.get('authorization'))
      .then((decodedToken) => {
        const uid = decodedToken.uid;
      })
      .catch((error) => {
        // Handle error
      });
  }
};

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/* eslint-disable-next-line no-unused-vars */
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
