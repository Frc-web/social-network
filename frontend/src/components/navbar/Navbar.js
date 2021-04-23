import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navbar.module.css';
import logo from './icon-left-font-monochrome-white.svg'


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [largeur, setLargeur] = useState(window.innerWidth)

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if(window.innerWidth > 500) {
        setToggleMenu(false);
      }
    }
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, [])

  return (
    <nav>
      <NavLink exact to="/">
        <div className={styles.logo}>
          <img className={styles.img} src={logo} alt="logo" />
        </div>
      </NavLink>
      <div>
        {/* si toggleMenu is true, on affiche ce qu'il y a entre parenthèses, sinon rien */}
        {(toggleMenu || largeur > 500) && (
          <ul className={styles.liste}>
            <NavLink exact to="/profil">
              <li className={styles.items}>Profil</li>
            </NavLink>
            <NavLink exact to="/home">
              <li className={styles.items}>Accueil</li>
            </NavLink>
          </ul>
        )}
        <button onClick={toggleNavSmallScreen} className={styles.btn}>MENU</button>
      </div>
    </nav>
  );
};

export default Navbar;