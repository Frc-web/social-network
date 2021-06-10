const dbConnect = require('../config/db');

const User = (user) => {
  this.id = user.id ? user.id : null;
  this.pseudo = user.pseudo ? user.pseudo : null;
  this.lastname = user.lastname ? user.lastname : null;
  this.firstname = user.firstname ? user.firstname : null; 
  this.email = user.email ? user.email : null;
  this.password = user.password ? user.password : null;
  this.pictures = user.pictures ? user.pictures : null;
  this.isAdmin = user.isAdmin ? true : false;
}

User.modify = (modifyUser, callback) => {
  dbConnect.query(`UPDATE users SET pseudo=?, lastname=?, firstname=?, email=?, password=?, picture=?, isAdmin=? WHERE id= ?`, [modifyUser.pseudo, modifyUser.lastname, modifyUser.firstname, modifyUser.email, modifyUser.password, modifyUser.picture, modifyUser.isAdmin, modifyUser.id], (err, results) => {
    callback(err, results);
  });
};

User.delete = (deleteUser, callback) => {
  dbConnect.query(`DELETE FROM users WHERE id= ?`, [deleteUser.id], (err, results) => {
    callback(err, results);
  });
};

module.exports = User;