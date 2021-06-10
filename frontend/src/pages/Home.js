import React from 'react';
import Bio from '../components/posts/Bio';
import PostsCreate from '../components/posts/PostsCreate';
import PostsGetAll from '../components/posts/PostsGetAll';

const Home = () => {

  if (localStorage.getItem("auth") === null) {
    alert("Vous devez être connecté pour aller sur la page d'accueil");
    return window.location = "/profil";
  } else {
    return (
      <div className="homePage">
        <div className="homeContainer">
          <Bio />
          <PostsCreate />
          <PostsGetAll />
        </div>
      </div>
    );
  }
   
};

export default Home;