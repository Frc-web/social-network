import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Disconect from './Disconect';

const Bio = () => {

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
      url: 'http://localhost:5000/api/bio/',
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
      <section>
         {items.map((item, index) => (
            <div className="card bioCard" key={"bio" + index}>
              <h3><i className="fas fa-user fasBio"></i>{item.pseudo}</h3>
              <Disconect />
            </div>
          ))}
      </section>
    );
  };
 
};

export default Bio;