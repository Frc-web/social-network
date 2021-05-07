import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './postsGetAll.module.css';
import PostShare from './PostShare';

const PostSGetAll = () => {  

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
      url: 'http://localhost:5000/api/post/',
      headers
    })
      .then(res => {
        setIsLoaded(true);
        setItems(res.data.results);
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
            <div id="onePostContent" className={styles.onePostContainer} key={"post" + index}>
              <p>Posté par {item.pseudo} le {new Date(item.date).toLocaleDateString() + ' à ' + new Date(item.date).getHours() + 'H' + new Date(item.date).getMinutes()}</p>
              <h3>{item.title}</h3>
              <p>{item.content}</p> 
              <div className={styles.btn}>
                <button>Like 🤍</button>
                <PostShare shareId={item.id}/>
              </div>
            </div>
          ))}
      </section>
    );
  };
};

export default PostSGetAll;