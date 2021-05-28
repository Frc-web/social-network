import React from 'react';
import Bio from '../components/posts/Bio';
import PostGetShare from '../components/posts/PostGetShare';
import PostsCreate from '../components/posts/PostsCreate';
import PostsGetAll from '../components/posts/PostsGetAll';
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeContainer}>
        <Bio />
        <PostsCreate />
        <PostGetShare />
        <PostsGetAll />
      
      </div>
  </div>
  );
};

export default Home;