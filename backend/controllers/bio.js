const dbConnect = require('../config/db');
const Bio = require('./../models/Bio');

// exports.getBio = (req, res, next) => {
//   let bio = {
//     userId : req.decodToken.userId
//   };
//   Bio.getIdentity(bio, (error, results) => {
//     if (error) throw error;
//     return res.status(200).json({ results })
//   });
// }

exports.getBio = (req, res, next) => {
  dbConnect.query(`SELECT users.pseudo FROM users WHERE id= ?`, [req.decodToken.userId], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}