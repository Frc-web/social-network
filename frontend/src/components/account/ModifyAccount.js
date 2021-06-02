import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from "../../components/auth/LoginForm";

const ModifyAccount = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem('auth')
    }

    const passwordConfirmError = document.querySelector(".password-confirm");
    passwordConfirmError.innerHTML = "";
    if (password !== controlPassword) {
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
    } else {
      await axios({
        method: "post",
        url: 'http://localhost:5000/api/user/',
        data: {
          lastname,
          firstname,
          pseudo,
          email,
          password,
        },
        headers
      })
        .then((res) => {
          console.log(res);
          setFormSubmit(true);
          localStorage.removeItem("auth");
          // window.location = "/profil";
        })
        .catch((err) => { console.log(err) });
    }
  };
  return (
    <>
      {formSubmit ? ( 
        <>
          <LoginForm /> {/* <Home /> */}
          <span></span>
          <h4 className="success">
            Modifications réussies, veuillez-vous reconnecter
          </h4>
        </>
      ) : ( 
        <form className="form" action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="lastname"><i className="fas fa-file-signature"></i>Nom</label>
          <br />
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={(event) => setLastname(event.target.value)}
            value={lastname}
          />
          <div className="lastname"></div>
          <br />
          <label htmlFor="firstname"><i className="fas fa-file-signature"></i>Prénom</label>
          <br />
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={(event) => setFirstname(event.target.value)}
            value={firstname}
          />
          <div className="firstname"></div>
          <br />
          <label htmlFor="pseudo"><i className="fas fa-user"></i>Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(event) => setPseudo(event.target.value)}
            value={pseudo}
          />
          <div className="pseudo"></div>
          <br />
          <label htmlFor="email"><i className="fas fa-envelope fa-mail"></i>Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <div className="email"></div>
          <br />
          <label htmlFor="password"><i className="fas fa-key"></i>Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <div className="password"></div>
          <br />
          <label htmlFor="password-conf"><i className="fas fa-key"></i>Confirmer mot de passe</label>
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
          <input type="submit" value="Valider modifications" />
        </form>
      )}
    </>
  );
};

export default ModifyAccount;