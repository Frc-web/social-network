import React from 'react';

const Disconect = () => {

  const handleDisconect = () => {
    localStorage.removeItem("auth");
    window.location = "/profil";
  }

  return (
    <div>
      <button onClick={handleDisconect}>Déconnection <i class="fas fa-sign-out-alt"></i></button>
    </div>
  );
};

export default Disconect;