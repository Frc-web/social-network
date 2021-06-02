import React from 'react';
import Account from '../components/account';

const UserAccount = () => {

  if (localStorage.getItem("auth") === null) {
    alert('Vous devez être connecté pour aller sur la page de votre compte');
    return window.location = "/profil";
  } else {

    return (
      <div className="userAccountPage">
        <Account prModify={true} prDelete={false} />
      </div>
    );
  }
};

export default UserAccount;