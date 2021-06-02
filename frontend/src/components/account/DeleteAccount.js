import React from 'react';
import axios from 'axios';

const DeleteAccount = () => {

  const handleDelete = (event) => {
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem('auth')
    }
    axios({
      method: 'delete',
      url: 'http://localhost:5000/api/user',
      headers
    })
      .then((res) => {
        window.location = "/profil";
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <button className="btnDelete" onClick={handleDelete}><i className="fas fa-trash-alt"></i>Supprimer votre compte</button>
    </div>
  );
};

export default DeleteAccount;