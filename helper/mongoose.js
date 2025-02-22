const mongoose = require('mongoose');

const dbConnection = () => {
  const dbURI = 'mongodb://127.0.0.1:27017/dbNewBlogger';
  return mongoose.connect(dbURI);
};

module.exports = dbConnection;
