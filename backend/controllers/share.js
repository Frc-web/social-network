const fs = require('fs');
const dbConnect = require('../config/db');

exports.createShare = (req, res, next) => {
  let attachmentUrl = "";
  if (req.file) {
    attachmentUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  }
  console.log(req.body);
  dbConnect.query(`INSERT INTO share(date, user_Id, post_Id) VALUES (NOW(),?,?)`, [req.decodToken.userId, req.body.postId], function (error, results, fields) { //le userId du middleware d'authentification et le postId du data de la requete axios
    if (error) throw error;
    return res.status(201).json({ message: "Partage créé !" })
  });
}

exports.getShare = (req, res, next) => {
  dbConnect.query(`SELECT share.id, share.user_Id, share.post_Id, share.date, posts.date AS 'postDate', posts.title, posts.content, posts.attachment, users.pseudo FROM share INNER JOIN users ON share.user_Id = users.id INNER JOIN posts ON share.post_Id = posts.id where posts.id=? ORDER BY share.date DESC`, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    return res.status(200).json({ results })
  })
}

// SELECT * from share s INNER JOIN posts p ON s.post_Id = p.id INNER JOIN users u ON s.user_Id = u.id; //test