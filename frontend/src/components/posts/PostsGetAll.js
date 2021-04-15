import React from 'react';
import axios from 'axios';
import styles from './postsGetAll.module.css';

const PostSGetAll = () => {

  axios({
    method: 'get',
    url: 'http://localhost:5000/api/post/',
    withCredentials: true,
  })
    .then(res => { 
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <div className={styles.postContainer}>
      <div id="postContent"></div>
    </div>
  );
};

export default PostSGetAll;