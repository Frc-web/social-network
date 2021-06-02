import React from 'react';
import axios from 'axios';

const CreateShare = ( props ) => {

  const handleShare = (event) => {
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem('auth')
    }
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/share',
      data: {
        postId: props.copyShare.id //le postId qu'on retrouve dans la requete sql createShare
      },
      headers
    })
      .then((res) => {
        window.location = "/";
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return <button onClick={handleShare}><i className="fas fa-share-alt"> Partager</i></button>
};

export default CreateShare;