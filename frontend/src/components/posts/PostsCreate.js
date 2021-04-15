import React, { useState } from 'react';
import axios from 'axios';
import styles from './postsCreate.module.css';

const PostsCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:5000/api/post/',
      withCredentials: true,
      data: {
        title,
        content,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
      <div className={styles.postContainer}>
      <form id="post-form" action="" onSubmit={handlePost}>
        <label htmlFor="title">Titre</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <br />
        <label htmlFor="content">Postez votre message</label>
        <br />
        <textarea
          type="text"
          name="content"
          id="content"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostsCreate;