const dbConnect = require('../config/db');
const Post = require('./../models/Post');

exports.createPost = (req, res, next) => {
  let post = {
    userId : req.decodToken.userId,
    title : req.body.title,
    content : req.body.content,
  };
  Post.create(post, (error, results) => {
    if (error) throw error;
    return res.status(201).json({ message: "Message créé !" })
  });
}

exports.modifyPost = (req, res, next) => {
  dbConnect.query(`UPDATE posts SET title=?, content=?, WHERE id= ?`, [req.body.title, req.body.content, req.params.id], function (error, results, fields) {
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
  Post.getAll(post, (error, results) => {
    if (error) throw error;
    return res.status(201).json({ message: "Message créé !" })
  });
}

// exports.getAllPosts = (req, res, next) => {
//   dbConnect.query(`SELECT posts.id, posts.userId, posts.date, posts.title, posts.content, users.pseudo FROM posts INNER JOIN users ON posts.userId = users.id ORDER BY date DESC`, function (error, results, fields) {
//     if (error) throw error;
//     return res.status(200).json({ results })
//   })
// }

exports.getOnePost = (req, res, next) => {
  dbConnect.query(`SELECT * FROM posts  WHERE id=?`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}