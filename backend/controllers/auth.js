const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const schemaPasswordValidator = require('../config/passordValidator');
const dbConnect = require('../config/db');


exports.signup = (req, res) => {
  if (schemaPasswordValidator.validate(req.body.password)) {
    bcrypt
      .hash(req.body.password, 10)
      .then(hash => {
        dbConnect.query('INSERT INTO users (pseudo, lastname, firstname, email, password, bio, picture, isAdmin) VALUES (?,?,?,?,?,?,?,?)', [req.body.pseudo, req.body.lastname, req.body.firstname, req.body.email, hash, req.body.bio, req.body.picture, req.body.isAdmin], function (error, results, fields) {
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
  dbConnect.query('SELECT * FROM users WHERE pseudo =?', [req.body.pseudo], function (error, results, fields) {
    if (error) throw error;
    if (results.length > 0) { /* renvoi un tableau */
      bcrypt
        .compare(req.body.password, results[0].password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          return res.status(200).json({
            userId: results[0].id,
            token: jwt.sign(
              { userId: results[0].id },
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