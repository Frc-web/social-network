import React, { useState } from 'react';
import axios from 'axios';
import styles from './loginForm.module.css';

const LoginForm = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // const pseudoError = document.querySelector(".pseudo.error"); 
    // const passwordError = document.querySelector(".password.error");

    axios({
      method: 'post',
      url: 'http://localhost:5000/api/user/login',
      data: {
        pseudo,
        password,
      }, 
    })
      .then((res) => {
        console.log(res);
          localStorage.setItem("auth", res.data.token);
          window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form className={styles.formLogin} id="sign-up-form" action="" onSubmit={handleLogin}>{/* quand on fait un onSubmit, on fait un input type submit, qui déclenche la fonction quand on clique dedans */}
      <label htmlFor="pseudo">Pseudo</label>
      <br />
      <input
        type="text"
        name="pseudo"
        id="pseudo"
        onChange={(event) => setPseudo(event.target.value)} /* quand quelque chose change dans l'input, on récupère ce qui est changé dans cet input, pour le stocker dans le hook setPseudo */
        value={pseudo}
      />
      <div className="pseudo error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <input type="submit" value="Se connecter" /> {/* quand on fait un onSubmit, on fait un input type submit, qui déclenche la fonction quand on clique dedans */}
    </form>
  );
};

export default LoginForm;