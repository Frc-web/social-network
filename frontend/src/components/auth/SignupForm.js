import React, { useState } from "react";
import axios from 'axios';
import LoginForm from "./LoginForm";

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
    const lastnameError = document.querySelector(".lastname.error");
    const firstnameError = document.querySelector(".firstname.error");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(".password-confirm.error");
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = ""; /* Pour enlever les messages d'erreurs quand écrit de nouveau dans les inputs */
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
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
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
        if (res.data.errors) {
          lastnameError.innerHTML = res.data.errors.lastname;
          firstnameError.innerHTML = res.data.errors.firstname;
          pseudoError.innerHTML = res.data.errors.pseudo;
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else { /* si il n'y a pas d'erreurs, setFormSubmit devient true */
          setFormSubmit(true);
        }
      })
      .catch((err) => {console.log(err)});
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
    <form action="" onSubmit={handleRegister} id="sign-up-form">
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
          <br/>
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(event) => setControlPassword(event.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer"> {/* noopener noreferrer pour la sécurité */}
              conditions générales
            </a>
          </label>
          <div className="terms error"></div>
          <br />
      <input type="submit" value="Valider inscription" />
    </form>
    )}
    </>
  );
};

export default SignupForm;