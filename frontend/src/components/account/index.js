import React, { useState } from 'react';
import DeleteAccount from './DeleteAccount';
import ModifyAccount from './ModifyAccount';

const Account = ( props ) => {

  const [modifyChoice, setModifyChoice] = useState(props.prModify); /* (true) */
  const [deleteChoice, setDeleteChoice] = useState(props.prDelete); /* (false) */

  const selectChoice = (event) => { 
    if (event.target.id === "modify-btn") { 
      setModifyChoice(true);
      setDeleteChoice(false);
    } else if (event.target.id === "delete-btn") {
      setDeleteChoice(true);
      setModifyChoice(false);
    }
  };

  return (
    <div className="cardUser">
        <ul>
          <li id="modify-btn" onClick={selectChoice}
            className={modifyChoice ? "active_btn" : null}>Modifier le compte</li> {/* si signUpForm est sur true (mettre la classe active-btn), sinon (pas de classe) */}
          <li id="delete-btn" onClick={selectChoice}
            className={deleteChoice ? "active_btn" : null}>Supprimer le compte</li>
        </ul>
        {modifyChoice && <ModifyAccount />} {/* si signUpForm est sur true, on affiche la page Signup */}
        {deleteChoice && <DeleteAccount />} {/* si loginForm est sur true, on affiche la page Login */}
    </div>
  );
};

export default Account;