const dbConnect = require('../config/db');

const Auth = (auth) => {
  this.id = auth.id ? auth.id : null;
  this.pseudo = auth.pseudo ? auth.pseudo : null;
  this.lastname = auth.lastname ? auth.lastname : null;
  this.firstname = auth.firstname ? auth.firstname : null; 
  this.email = auth.email ? auth.email : null;
  this.password = auth.password ? auth.password : null;
  this.bio = auth.bio ? auth.bio : null;
  this.pictures = auth.pictures ? auth.pictures : null;
  this.isAdmin = auth.isAdmin ? auth.isAdmin : null;
}

Auth.create = (newUser, callback) => {
  dbConnect.query(`INSERT INTO users (pseudo, lastname, firstname, email, password, bio, picture, isAdmin) VALUES (?,?,?,?,?,?,?,?)`, [newUser.pseudo, newUser.lastname, newUser.firstname, newUser.email, newUser.password, newUser.bio, newUser.pictures, newUser.isAdmin], (err, results) => {
    callback(err, results);
  });
};

// Auth.login = (loginUser, callback) => {
//   dbConnect.query('SELECT * FROM users WHERE pseudo =?', [loginUser.pseudo], (err, results) => {
//     callback(err, results);
//   });
// };

module.exports = Auth;