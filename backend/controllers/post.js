const fs = require('fs');
const dbConnect = require('../config/db');

exports.createPost = (req, res, next) => {
  let attachmentUrl = "";
  if (req.file) {
    attachmentUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  }
  console.log(req.body);
  dbConnect.query(`INSERT INTO posts (userId, title, content, attachment, date ) VALUES (?,?,?,?, NOW())`, [req.decodToken.userId, req.body.title, req.body.content, attachmentUrl], function (error, results, fields) {
    if (error) throw error;
    return res.status(201).json({ message: "Message créé !" })
  });
}

exports.modifyPost = (req, res, next) => {
  dbConnect.query(`UPDATE posts SET title=?, content=?, attachment=? WHERE id= ?`, [req.body.title, req.body.content, req.body.attachment, req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ message: 'Objet modifié' })
  })
}

exports.deletePost = (req, res, next) => {
  dbConnect.query(`DELETE FROM posts WHERE id= ?`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ message: 'Objet supprimé' })
  })
}

exports.getAllPosts = (req, res, next) => {
  dbConnect.query(`SELECT posts.id, posts.userId, posts.date, posts.title, posts.content, posts.attachment, users.pseudo FROM posts INNER JOIN users ON posts.userId = users.id ORDER BY date DESC`, function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}

exports.getOnePost = (req, res, next) => {
  dbConnect.query(`SELECT * FROM posts  WHERE id=?`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}

exports.sharePost = (req, res, next) => {
  dbConnect.query(`SELECT share.id, share.user_Id, share.post_Id, share.date, posts.date, posts.title, posts.content, posts.attachment, users.pseudo, FROM share INNER JOIN users ON share.user_Id = users.id where posts.id=? ORDER BY date DESC`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}