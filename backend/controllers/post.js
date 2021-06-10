const dbConnect = require('../config/db');
const Post = require('./../models/Post');
const Share = require('./../models/Share');

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

exports.getAllPosts = (req, res, next) => {
  Post.getAll((error, posts) => {
    if (error) throw error;
    Share.getAll((error, shares) => {
      if (error) throw error;
      let publications = posts.concat(shares);
      publications.sort(function(a,b){
        return new Date(b.date) - new Date(a.date)
      });
      console.log("publications",publications)
      return res.status(200).json({ publications })
    })
  });
}

exports.deletePost = (req, res, next) => {
  let post = {
    id : req.params.id
  };
  Post.delete(post, (error, results) => {
    if (error) throw error;
    return res.status(200).json({ message: "Message supprimé !" })
  });
}