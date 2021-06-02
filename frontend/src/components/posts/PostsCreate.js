import React, { useState } from 'react';
import axios from 'axios';

const PostsCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = (event) => {
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem('auth')
    }
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/post/',
      data: {
        title,
        content,
      },
      headers
    })
      .then((res) => {
        console.log(res);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
      <section className="card postCreateContainer">
      <form className="form" id="post-form" action="" onSubmit={handlePost}>
        <label htmlFor="title">Titre</label>
        <br />
        <input
          className="inputCreate"
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
        <input type="submit" value="Envoyer   ✉️"/>
      </form>
    </section>
  );
};

export default PostsCreate;