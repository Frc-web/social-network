const dbConnect = require('../config/db');
const Post = require('./../models/Post');
const Share = require('./../models/Share')

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

// exports.getAllPosts = (req, res, next) => {
//   Post.getAll((error, results) => {
//     if (error) throw error;
//     return res.status(200).json({ results })
//   });
// }

// exports.getAllPosts = (req, res, next) => {
//   Post.getAll((error, posts) => {
//     if (error) throw error;
//     dbConnect.query(`SELECT share.id, share.user_Id, share.post_Id, share.date, posts.date AS 'postDate', posts.title, posts.content, users.pseudo , u.pseudo as 'author' FROM share INNER JOIN users ON share.user_Id = users.id INNER JOIN posts ON share.post_Id = posts.id INNER JOIN users u on posts.userId = u.id ORDER BY share.date DESC`, function (error, shares, fields) {
//       if (error) throw error;
//       let publications = posts.concat(shares);
//       publications.sort(function(a,b){
//         return new Date(b.date) - new Date(a.date)
//       });
//       console.log("publications",publications)
//       return res.status(200).json({ publications })
//     })
//     // return res.status(200).json({ results })
//   });
// }

exports.getAllPosts = (req, res, next) => {
  Post.getAll((error, posts) => {
    if (error) throw error;
    Share.get(post, (error, results) => {
      if (error) throw error;
      let publications = posts.concat(shares);
      publications.sort(function(a,b){
        return new Date(b.date) - new Date(a.date)
      });
      console.log("publications",publications)
      return res.status(200).json({ publications })
    })
    // return res.status(200).json({ results })
  });
}

exports.getOnePost = (req, res, next) => {
  dbConnect.query(`SELECT * FROM posts  WHERE id=?`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}