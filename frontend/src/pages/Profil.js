import React from 'react';
import Auth from '../components/auth';

const Profil = () => {
  return (
    <div className="profilPage">
        <Auth prLogin={false} prSignup={true} /> {/* -(props)- sur la page de profil, on met signIn sur true et signUp sur false (ca restera sur s'inscrire sur profil) */}
    </div>
  );
};

export default Profil;