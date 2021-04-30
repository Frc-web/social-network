import React, { useState } from 'react';
import styles from './postShare.module.css';

const PostShare = ( props ) => { //props de PostGetAll

  const [idShare, setIdShare] = useState(props.idShare);
  let container = document.getElementById('onePostContent');

  const share = () => {
    console.log(idShare);
    localStorage.setItem('items', idShare);
    container.innerHTML = "l'utilisateur 'inconnu' à partagé: <br>" + localStorage.getItem('items');
  }

  return (
    <div>
      <button className={styles.btnShare} onClick={share}>Partager</button>
    </div>
  );
};

export default PostShare;