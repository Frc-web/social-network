const dbConnect = require('../config/db');

exports.modifyUser = (req, res, next) => {
  dbConnect.query(`UPDATE users SET pseudo=?, lastname=?, firstname=?, email=?, password=?, bio=?, picture=?, isAdmin=? WHERE id= ?`, [req.body.pseudo, req.body.lastname, req.body.firstname, req.body.email, req.body.password, req.body.bio, req.body.picture, req.body.isAdmin, req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ message: 'Utilisateur modifié' })
  })
}

exports.deleteUser = (req, res, next) => {
  dbConnect.query(`DELETE FROM users WHERE id= ?`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ message: 'Utilisateur supprimé' })
  })
}

exports.getAllUsers = (req, res, next) => {
  dbConnect.query(`SELECT id, pseudo, lastname, firstname, email, bio, likes, picture, isAdmin FROM users`, function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}

exports.getOneUser = (req, res, next) => {
  dbConnect.query(`SELECT id, pseudo, lastname, firstname, email, bio, likes, picture, isAdmin FROM users  WHERE id=?`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}