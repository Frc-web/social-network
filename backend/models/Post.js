const dbConnect = require('../config/db');

const Post = (post) => {
  this.id = post.id ? post.id : null;
  this.userId = post.userId ? post.userId : null; 
  this.date = post.date ? post.date : null;
  this.title = post.title ? post.title : null;
  this.content = post.content ? post.content : null;
}

Post.create = (newPost, callback) => {
  dbConnect.query(`INSERT INTO posts (posts.userId, posts.title, posts.content, posts.date ) VALUES (?,?,?, NOW())`, [newPost.userId, newPost.title, newPost.content], (err, results) => {
    callback(err, results);
  });
};

Post.getAll = (callback) => {
  dbConnect.query(`SELECT p.id, p.userId, p.date, p.title, p.content, u.pseudo FROM posts p INNER JOIN users u ON p.userId = u.id ORDER BY date DESC`, (err, results) => {
    callback(err, results);
  });
};

module.exports = Post;