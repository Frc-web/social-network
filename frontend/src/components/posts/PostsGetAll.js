import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './postsGetAll.module.css';

const PostSGetAll = () => {

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "bearer " + localStorage.getItem('auth')
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/post/',
      headers
    })
      .then(res => res.json(console.log(res)))
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className={styles.postsContainer}>
        <ul>
          {items.map(item => (
            <li key={item.userId}>
              {item.title} {item.content}
            </li>
          ))}
        </ul>
      </div>
    );
  };
};

export default PostSGetAll;