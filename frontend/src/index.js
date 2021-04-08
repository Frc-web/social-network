// c'est le fichier le plus haut, il pointe sur root (contient toute l'application)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';


ReactDOM.render(
    <App />,
  document.getElementById("root")
); 