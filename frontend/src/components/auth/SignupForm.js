import React, { useState } from "react";
import axios from 'axios';
import LoginForm from "./LoginForm";
import styles from './signupForm.module.css';

const SignupForm = () => {
  const [formSubmit, setFormSubmit] = useState(false); /* est ce que le formulaire a été soumis ? (false par défaut) */
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    const terms = document.getElementById("terms");
    // const lastnameError = document.querySelector(".lastname");
    // const firstnameError = document.querySelector(".firstname");
    // const pseudoError = document.querySelector(".pseudo");
    // const emailError = document.querySelector(".email");
    // const passwordError = document.querySelector(".password");
    const passwordConfirmError = document.querySelector(".password-confirm");
    const termsError = document.querySelector(".terms");

    // pour faire disparaitre les erreurs après soumission
    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: 'http://localhost:5000/api/user/signup',
        data: {
          lastname,
          firstname,
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          setFormSubmit(true);
        })
        .catch((err) => { console.log(err) });
    }
  };
  return (
    <>
      {formSubmit ? ( /* est ce que formSubmit est sur true ? */
        <>
          <LoginForm /> {/* on met le formulaire de connection + le texte qui suit */}
          <span></span> {/* pour mettre le texte en dessous du submit */}
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
        </h4>
        </>
      ) : ( /* on enlève tout ce qui suit (si formSubmit est sur false, tout ce qui suit est affiché */
        <form className={styles.formSignup} action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="lastname">Nom</label>
          <br />
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={(event) => setLastname(event.target.value)}
            value={lastname}
          />
          <div className="lastname error"></div>
          {/* <div className={`${styles.lastname} ${styles.error}`}></div> */}
          <br />
          <label htmlFor="firstname">Prénom</label>
          <br />
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={(event) => setFirstname(event.target.value)}
            value={firstname}
          />
          <div className="firstname error"></div>
          <br />
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(event) => setPseudo(event.target.value)}
            value={pseudo}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <div className="email error"></div>
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
          <br />
          <label htmlFor="password-conf">Confirmer mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(event) => setControlPassword(event.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <br />
            <div class={styles.myDiv}>
              <div>

              <input type="checkbox" id="terms" />
              </div>
              <div>

              <label htmlFor="terms">J'accepte les
              <a href="/" target="_blank" rel="noopener noreferrer"> conditions générales
              </a>
              </label>
              </div>
            <div className="terms error"></div>
          </div>
          <br />
          <input type="submit" value="Valider inscription" />
        </form>
      )}
    </>
  );
};

export default SignupForm;