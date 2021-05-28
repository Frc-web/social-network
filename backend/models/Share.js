const dbConnect = require('../config/db');

const Share = (share) => {
  this.id = share.id ? share.id : null;
  this.date = share.date ? share.date : null;
  this.user_Id = share.user_Id ? share.user_Id : null; 
  this.post_Id = share.post_Id ? share.post_Id : null; 
}

Share.create = (newShare, callback) => {
  dbConnect.query(`INSERT INTO share(date, user_Id, post_Id) VALUES (NOW(),?,?)`, [newShare.user_Id, newShare.post_Id], (err, results) => {
    callback(err, results);
  });
};

module.exports = Share;