import React from 'react';
import Auth from '../components/auth';
import styles from  './profil.module.css';

const Profil = () => {
  return (
    <div className={styles.profilPage}>
      <div className={styles.logContainer}>
        <Auth prLogin={false} prSignup={true} /> {/* -(props)- sur la page de profil, on met signIn sur true et signUp sur false (ca restera sur s'inscrire sur profil) */}
      </div>
    </div>
  );
};

export default Profil;