import React from 'react';
import PostsCreate from '../components/posts/PostsCreate';
import PostsGetAll from '../components/posts/PostsGetAll';
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeContainer}>
        <PostsCreate />
        <PostsGetAll />
      </div>
  </div>
  );
};

export default Home;