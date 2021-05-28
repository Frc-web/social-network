const dbConnect = require('../config/db');
const Share = require('./../models/Share');

exports.createShare = (req, res, next) => {
  let share = {
    user_Id : req.decodToken.userId,
    post_Id : req.body.postId,
  };
  Share.create(share, (error, results) => {
    if (error) throw error;
    return res.status(201).json({ message: "Partage créé !" })
  });
}

exports.getShare = (req, res, next) => {
  dbConnect.query(`SELECT share.id, share.user_Id, share.post_Id, share.date, posts.date AS 'postDate', posts.title, posts.content, users.pseudo , u.pseudo as 'author' FROM share INNER JOIN users ON share.user_Id = users.id INNER JOIN posts ON share.post_Id = posts.id INNER JOIN users u on posts.userId = u.id ORDER BY share.date DESC`, function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}