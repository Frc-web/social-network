import React from 'react';

const DeletePost = (props) => {

  const userId = sessionStorage.getItem('userId');
  const isAdmin = sessionStorage.getItem('isAdmin');

  if (isAdmin == 1 || userId == props.author || userId == props.sharer)  {
    return (
        <button className="btnSupp" onClick={(e) => {props.handleClick(e, props.postId)}}><i className="fas fa-trash-alt fa-supp"></i></button>
    );
  } else {
    return null;
  }
};

export default DeletePost;