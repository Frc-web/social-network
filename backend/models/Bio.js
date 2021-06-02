// const dbConnect = require('../config/db');

// const Bio = (bio) => {
//   this.userId = bio.userId ? bio.userId : null;  
// }

// Bio.getIdentity = (newBio, callback) => {
//   dbConnect.query(`SELECT users.pseudo FROM users WHERE id= ?`, [newBio.userId], (err, results) => {
//     callback(err, results);
//   });
// }