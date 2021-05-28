const dbConnect = require('../config/db');

exports.getBio = (req, res, next) => {
  dbConnect.query(`SELECT users.pseudo FROM users WHERE id= ?`, [req.decodToken.userId], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}