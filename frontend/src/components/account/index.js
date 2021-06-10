import React, { useState } from 'react';
import DeleteAccount from './DeleteAccount';
import ModifyAccount from './ModifyAccount';

const Account = (props) => {

  const [modifyChoice, setModifyChoice] = useState(props.prModify); /* (true) */
  const [deleteChoice, setDeleteChoice] = useState(props.prDelete); /* (false) */

  const userId = sessionStorage.getItem('userId');
  const isAdmin = sessionStorage.getItem('isAdmin');

  const selectChoice = (event) => {
    if (event.target.id === "modify-btn") {
      setModifyChoice(true);
      setDeleteChoice(false);
    } else if (event.target.id === "delete-btn") {
      setDeleteChoice(true);
      setModifyChoice(false);
    }
  };

  if (isAdmin == 1 /*|| userId == req.decodToken)*/) {
    return (
      <div className="cardUser">
        <ul>
          <li id="modify-btn" onClick={selectChoice}
            className={modifyChoice ? "active_btn" : null}>Modifier le compte</li>
          <li id="delete-btn" onClick={selectChoice}
            className={deleteChoice ? "active_btn" : null}>Supprimer le compte</li>
        </ul>
        {modifyChoice && <ModifyAccount />}
        {deleteChoice && <DeleteAccount />}
      </div>
    )
  } else {
    // return null;
    alert("Vous n'avez pas accès à ces informations");
    return window.location = "/profil";
  }
};

export default Account;