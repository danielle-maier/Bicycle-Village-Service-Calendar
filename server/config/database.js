require('dotenv').config()

module.exports = {
  'secret':process.env.DB_SECRET,
  'database': 'mongodb://localhost/bv355'
};
