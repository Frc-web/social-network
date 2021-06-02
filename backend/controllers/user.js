const dbConnect = require('../config/db');
const bcrypt = require('bcrypt');
const schemaPasswordValidator = require('../config/passordValidator');
const Auth = require('../models/User');

exports.modifyUser = (req, res) => {
  if (schemaPasswordValidator.validate(req.body.password)) {
    bcrypt
      .hash(req.body.password, 10)
      .then(hash => {
        let user = {
          pseudo : req.body.pseudo,
          lastname : req.body.lastname,
          firstname : req.body.firstname,
          email : req.body.email,
          password : hash,
          pictures : req.body.pictures,
          isAdmin : req.body.isAdmin,
        }
        User.modify(user, (error, results) => {
          if (error) throw error;
          return res.status(201).json({ message: "Utilisateur modifié !" })
        });
      })
      .catch((error) => res.status(500).json({ error }));
  } else {
    return res.status(400).json({
      error: "Le mot de passe doit contenir au minimum huit caractères dont au moins une majuscules, une minuscules, un symbole, et au moins deux chiffres"
    });
  }
};
// exports.modifyUser = (req, res, next) => {
//   dbConnect.query(`UPDATE users SET pseudo=?, lastname=?, firstname=?, email=?, password=?, picture=?, isAdmin=? WHERE id= ?`, [req.body.pseudo, req.body.lastname, req.body.firstname, req.body.email, req.body.password, req.body.picture, req.body.isAdmin, req.params.id], function (error, results, fields) {
//     if (error) throw error;
//     return res.status(200).json({ message: 'Utilisateur modifié' })
//   })
// }

exports.deleteUser = (req, res, next) => {
  User.delete((error, results) => {
    if (error) throw error;
    return res.status(201).json({ message: "Utilisateur supprimé !" })
  });
}
// exports.deleteUser = (req, res, next) => {
//   dbConnect.query(`DELETE FROM users WHERE id= ?`, [req.params.id], function (error, results, fields) {
//     if (error) throw error;
//     return res.status(200).json({ message: 'Utilisateur supprimé' })
//   })
// }

exports.getAllUsers = (req, res, next) => {
  dbConnect.query(`SELECT id, pseudo, lastname, firstname, email, picture, isAdmin FROM users`, function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}

exports.getOneUser = (req, res, next) => {
  dbConnect.query(`SELECT id, pseudo, lastname, firstname, email, picture, isAdmin FROM users  WHERE id=?`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}