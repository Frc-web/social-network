import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from './icon-left-font-monochrome-white.svg';

const Navbar = () => {

  return (
    <nav id="navStyle">
      <div className={styles.container}>
        <NavLink exact to="/">
          <div className={styles.logo}>
            <img className={styles.img} src={logo} alt="logo" />
          </div>
        </NavLink>
        <div>          
            <ul className={styles.liste}>
              <NavLink exact to="/profil">
                <li className={styles.items}><i className="fas fa-user"></i>Profil</li>
              </NavLink>
              <NavLink exact to="/account">
                <li className={styles.items}><i className="fas fa-pencil-alt"></i>Compte</li>
              </NavLink>
              <NavLink exact to="/home">
                <li className={styles.items}><i className="fas fa-home"></i>Accueil</li>
              </NavLink>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;