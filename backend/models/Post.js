const dbConnect = require('../config/db');

const Post = (post) => {
  this.id = post.id ? post.id : null;
  this.userId = post.userId ? post.userId : null; 
  this.date = post.date ? post.date : null;
  this.title = post.title ? post.title : null;
  this.content = post.content ? post.content : null;
}

Post.create = (newPost, callback) => {
  dbConnect.query(`INSERT INTO posts (userId, title, content, date ) VALUES (?,?,?, NOW())`, [newPost.userId, newPost.title, newPost.content], (err, results) => {
    callback(err, results);
  });
};

Post.getAll = (newPost, callback) => {
  dbConnect.query(`SELECT id, userId, date, title, content, users.pseudo FROM posts INNER JOIN users ON userId = users.id ORDER BY date DESC`, (err, results) => {
    callback(err, results);
  });
};

module.exports = Post;