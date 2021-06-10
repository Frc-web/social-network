import React from 'react';
import axios from 'axios';

const DeletePost = () => {

  const userId = sessionStorage.getItem('userId');
  const isAdmin = sessionStorage.getItem('isAdmin');

  const handleDeletePost = (event) => {
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem('auth')
    }

    axios({
      method: 'delete',
      url: 'http://localhost:5000/api/post/' + userId,
      headers
    })
      .then((res) => {
        // window.location = "/";
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  if (isAdmin == 1 /* || userId == req.decodToken */)  {
    return (
      <div>
        <button className="btnSupp" onClick={handleDeletePost}><i className="fas fa-trash-alt fa-supp"></i></button>
      </div>
    );
  } else {
    return null;
  }
};

export default DeletePost;