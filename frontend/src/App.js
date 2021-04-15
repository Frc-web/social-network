import React from 'react';
import Routes from "./components/routes";
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes />
    </div>
  );
};

export default App;