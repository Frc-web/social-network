import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import styles from './index.module.css';

const Auth = ( props ) => {
  const [signUpChoice, setSignUpChoice] = useState(props.prSignup); /* -(hook)- sur (true), c'est la props du composant Profil */
  const [loginChoice, setLoginChoice] = useState(props.prLogin); /* sur (false) */

  const selectChoice = (event) => { /* on récupère l'événement (event) cliqué */
    if (event.target.id === "signup-btn") { /* si l'id ciblé est signup */
      setLoginChoice(false);
      setSignUpChoice(true);
    } else if (event.target.id === "login-btn") {
      setSignUpChoice(false);
      setLoginChoice(true);
    }
  };

  return (
    <div className={styles.connectionForm}>
        <ul>
          <li id="signup-btn" onClick={selectChoice}
            className={signUpChoice ? styles.active_btn : null}>S'inscrire</li> {/* si signUpForm est sur true (mettre la classe active-btn), sinon (pas de classe) */}
          <li id="login-btn" onClick={selectChoice}
            className={loginChoice ? styles.active_btn : null}>Se connecter</li>
        </ul>
        {signUpChoice && <SignupForm />} {/* si signUpForm est sur true, on affiche la page Signup */}
        {loginChoice && <LoginForm />} {/* si loginForm est sur true, on affiche la page Login */}
    </div>
  );
};

export default Auth;