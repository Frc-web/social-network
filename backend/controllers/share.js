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
  Share.get((error, results) => {
    if (error) throw error;
    return res.status(200).json({ results })
  });
}