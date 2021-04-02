import React from 'react';
import Auth from '../components/auth';

const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Auth prLogin={false} prSignup={true} /> {/* -(props)- sur la page de profil, on met signIn sur true et signUp sur false (ca restera sur s'inscrire sur profil) */}
      </div>
    </div>
  );
};

export default Profil;