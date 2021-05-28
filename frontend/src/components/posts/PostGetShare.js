import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './postGetShare.module.css';

const PostGetShare = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem('auth')
    };

    axios({
      method: 'get',
      url: 'http://localhost:5000/api/share/',
      headers
    })
      .then(res => {
        setIsLoaded(true);
        setItems(res.data.results);
        console.log(res.data.results);
      }).catch(error => {
        setIsLoaded(true);
        setError(error);
      })
  }, [])


  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {

    return (
      <section className={styles.postsContainer}>
        {items.map((item, index) => (
          <div id="oneShareContent" className={styles.onePostContainer} key={"postshare" + index}>

            <p>Partagé par {item.pseudo} le {new Date(item.date).toLocaleDateString() + ' à ' + new Date(item.date).getHours() + 'H' + (new Date(item.date).getMinutes() < 10 ? '0' : '') + new Date(item.date).getMinutes()}</p>

            <div className={styles.shareContainer}>
              <p>Posté par {item.author} le {new Date(item.postDate).toLocaleDateString() + ' à ' + new Date(item.postDate).getHours() + 'H' + (new Date(item.date).getMinutes() < 10 ? '0' : '') + new Date(item.postDate).getMinutes()}</p>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>

          </div>
        ))}
      </section>
    );
  };
}

export default PostGetShare;