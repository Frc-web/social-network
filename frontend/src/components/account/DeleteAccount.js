import React from 'react';
import axios from 'axios';

const DeleteAccount = () => {

  const handleDeleteAccount = (event) => {
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem('auth')
    }

    const userId = sessionStorage.getItem('userId');

    axios({
      method: 'delete',
      url: 'http://localhost:5000/api/user/' + userId,
      headers
    })
      .then((res) => {
        localStorage.removeItem("auth");
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("isAdmin");
        window.location = "/profil";
        console.log(res.data.message);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <button className="btnDelete" onClick={handleDeleteAccount}><i className="fas fa-trash-alt"></i>Supprimer votre compte</button>
    </div>
  );
};

export default DeleteAccount;