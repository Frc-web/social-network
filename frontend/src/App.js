// App est le composant principal de index.js, le fichier le plus haut
import React from 'react';
import Routes from "./components/routes";

const App = () => {
  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default App;