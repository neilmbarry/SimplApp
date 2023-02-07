const AppError = require('../utils/appError');

const sendDevelopmentError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    name: err.name,
    stack: err.stack,
  });
};

const sendProductionError = (error, res, err) => {
  if (error.isApplicationError) {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }
  res.status(error.statusCode).json({
    status: error,
    message: 'Something went terribly wrong! 🚨',
    toBeDeleted: err,
  });
};

const handleCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 404);
};

const handleTokenExpired = (err) => {
  const message = `{${err.name}}: We thought you'd left! Please log in.`;
  return new AppError(message, 400);
};

const handleDuplicateError = (err) => {
  const message = `{${err.keyValue.name}} already exists. Please choose a different name`;
  return new AppError(message, err.statusCode);
};

const handleValidationError = (err) => {
  const errors = Object.keys(err.errors)
    .map((errorName) => err.errors[errorName].message)
    .join(' ');
  const message = `Validation error. Please rectify the following: ${errors}`;
  return new AppError(message, 500);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendDevelopmentError(err, res);
  }
  if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.name = err.name;
    error.code = err.code;
    error.message = err.message;
    error.status = err.status;

    if (error.name === 'CastError') {
      error = handleCastError(error);
    }

    if (error.name === 'TokenExpiredError') {
      error = handleTokenExpired(error);
    }

    if (error.code === 11000) {
      error = handleDuplicateError(error);
    }

    if (error.name === 'ValidationError') {
      error = handleValidationError(error);
    }

    sendProductionError(error, res, err);
  }
};
