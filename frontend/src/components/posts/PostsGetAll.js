import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateShare from './CreateShare';
import DeletePost from './DeletePost';

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
        console.log("posts", res)
        setIsLoaded(true);
        setItems(res.data.publications);
        console.log(res.data.publications);
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
    return items.map((item, index) => {
      if (item.post_Id !== undefined) {
        return (<article id="oneShareContent" className="card" key={"postshare" + index}>
          <p><i className="fas fa-share-alt iconeShare"></i>Partagé par <span className="pseudo">{item.pseudo}</span> le {new Date(item.date).toLocaleDateString() + ' à ' + new Date(item.date).getHours() + 'H' + (new Date(item.date).getMinutes() < 10 ? '0' : '') + new Date(item.date).getMinutes()}</p>

          <div className="card cardShare">
            <p><i className="fas fa-envelope"></i>Posté par <span className="pseudo">{item.author}</span> le {new Date(item.postDate).toLocaleDateString() + ' à ' + new Date(item.postDate).getHours() + 'H' + (new Date(item.date).getMinutes() < 10 ? '0' : '') + new Date(item.postDate).getMinutes()}</p>
            <hr />
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.content}</p>
          </div>
          <div className="deleteBtn">
            <DeletePost />
          </div>
        </article>)
      } else {
        return (<article className="card" key={"post" + index}>
          <p><i className="fas fa-envelope"></i>Posté par <span className="pseudo">{item.pseudo}</span> le {new Date(item.date).toLocaleDateString() + ' à ' + new Date(item.date).getHours() + 'H' + (new Date(item.date).getMinutes() < 10 ? '0' : '') + new Date(item.date).getMinutes()}</p>
          <hr />
          <h3 className="title">{item.title}</h3>
          <p className="text">{item.content}</p>
          <div className="btnPost">
            <CreateShare copyShare={item} />
            <DeletePost />
          </div>
        </article>)
      }
    })
  };
};

export default PostSGetAll;