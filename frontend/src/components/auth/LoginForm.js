import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const pseudoError = document.querySelector(".pseudo.error"); /* quand on passe la costante pseudoError, on sélectionne dans le DOM les classes .pseudo et .error */
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`, /* dans react, les variables d'environnement commencent par REACT_APP */
      withCredentials: true,
      data: {
        pseudo, /* on passe la constante pseudo du hook, qui revient à (pseudo: pseudo) */
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) { /* si une erreur est revoyée dans la réponse */
          pseudoError.innerHTML = res.data.errors.pseudo; /* on injecte dans les classe .pseudo et .error */
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/"; /* on va à l'accueil, là où il y a le slash */
        }
      })
      .catch((err) => { /* si il y a une erreur dans la requête axios */
        console.log(err);
      });
  }

  return (
    <form id="sign-up-form" action="" onSubmit={handleLogin}>{/* quand on fait un onSubmit, on fait un input type submit, qui déclenche la fonction quand on clique dedans */}
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