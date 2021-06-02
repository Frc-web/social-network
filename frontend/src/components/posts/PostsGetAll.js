import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateShare from './CreateShare';

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

      // let one = 'http://localhost:5000/api/post/';
      // let two = 'http://localhost:5000/api/share/';
      // const requestOne = axios.get(one);
      // const requestTwo = axios.get(two);
      // axios.all([requestOne, requestTwo])
      // .then(
      //   axios.spread((...responses) => {
      //     const responseOne = responses[0];
      //     const responseTwo = responses[1];
      //     console.log(responseOne, responseTwo);
      //   })
      // )

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
          <div className="card" key={"post" + index}>
            <p><i className="fas fa-envelope"></i>Posté par <span className="pseudo">{item.pseudo}</span> le {new Date(item.date).toLocaleDateString() + ' à ' + new Date(item.date).getHours() + 'H' + (new Date(item.date).getMinutes() < 10 ? '0' : '') + new Date(item.date).getMinutes()}</p>
            <hr />
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.content}</p>
            <div className="btnShare">
              <CreateShare copyShare={item} />
            </div>
          </div>
        ))}
      </section>
      //       <section>
      //         {items.map((item, index) => (
      //           <div id="oneShareContent" className="card" key={"postshare" + index}>

      //             <p><i className="fas fa-share-alt iconeShare"></i>Partagé par <span className="pseudo">{item.pseudo}</span> le {new Date(item.date).toLocaleDateString() + ' à ' + new Date(item.date).getHours() + 'H' + (new Date(item.date).getMinutes() < 10 ? '0' : '') + new Date(item.date).getMinutes()}</p>

      //             <div className="card cardShare">
      //               <p><i className="fas fa-envelope"></i>Posté par <span className="pseudo">{item.author}</span> le {new Date(item.postDate).toLocaleDateString() + ' à ' + new Date(item.postDate).getHours() + 'H' + (new Date(item.date).getMinutes() < 10 ? '0' : '') + new Date(item.postDate).getMinutes()}</p>
      //               <hr/>
      //               <h3 className="title">{item.title}</h3>
      //               <p className="text">{item.content}</p>
      //             </div>

      //           </div>
      //         ))}
      //       </section>
    );
  };
};

export default PostSGetAll;