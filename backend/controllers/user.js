const dbConnect = require('../config/db');
const bcrypt = require('bcrypt');
const schemaPasswordValidator = require('../config/passordValidator');
const User = require('../models/User');

exports.modifyUser = (req, res) => {
  if (schemaPasswordValidator.validate(req.body.password)) {
    bcrypt
      .hash(req.body.password, 10)
      .then(hash => {
        let user = {
          id : req.params.id,
          pseudo : req.body.pseudo,
          lastname : req.body.lastname,
          firstname : req.body.firstname,
          email : req.body.email,
          password : hash,
          pictures : req.body.pictures,
          isAdmin : req.body.isAdmin ? req.body.isAdmin : false,
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

exports.deleteUser = (req, res, next) => {
  let user = {
    id : req.params.id
  };
  User.delete(user, (error, results) => {
    if (error) throw error;
    return res.status(200).json({ message: "Utilisateur supprimé !" })
  });
};

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