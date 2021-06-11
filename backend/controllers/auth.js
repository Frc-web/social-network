require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const schemaPasswordValidator = require('../config/passordValidator');
const Auth = require('../models/Auth');

exports.signup = (req, res) => {
  if (schemaPasswordValidator.validate(req.body.password)) {
    bcrypt
      .hash(req.body.password, 10)
      .then(hash => {
        let auth ={
          pseudo : req.body.pseudo,
          lastname : req.body.lastname,
          firstname : req.body.firstname,
          email : req.body.email,
          password : hash,
          pictures : req.body.pictures,
          isAdmin : req.body.isAdmin ? req.body.isAdmin : false,
        };
        Auth.create(auth, (error, results) => {
          if (error) throw error;
          return res.status(201).json({ message: "Utilisateur créé !" })
        });
      })
      .catch((error) => res.status(500).json({ error }));
  } else {
    return res.status(400).json({
      error: "Le mot de passe doit contenir au minimum huit caractères dont au moins une majuscules, une minuscules, un symbole, et au moins deux chiffres"
    });
  }
};

 exports.login = (req, res, next) => {
  Auth.login(req.body, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      bcrypt
        .compare(req.body.password, results[0].password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          return res.status(200).json({ 
            userId: results[0].id,
            isAdmin: results[0].isAdmin,
            token: jwt.sign(
              { userId: results[0].id, accessLevel: results[0].isAdmin },
              process.env.TOKEN,
              { expiresIn: "24h" }
            )
          })
        })
        .catch(error => res.status(500).json({ error: error }));
    } else {
      return res.status(400).json({ error: "pseudo non trouvé" })
    }
  })
};