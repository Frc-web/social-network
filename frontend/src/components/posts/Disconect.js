import React from 'react';

const Disconect = () => {

  const handleDisconect = () => {
    localStorage.removeItem("auth");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("isAdmin");
    window.location = "/profil";
  }

  return (
    <div>
      <button onClick={handleDisconect}>Déconnection <i className="fas fa-sign-out-alt"></i></button>
    </div>
  );
};

export default Disconect;