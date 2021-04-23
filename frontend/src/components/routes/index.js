import React from 'react';
// BrowserRouter est la bibliothèque de react-router-dom, qui permet de créer le router
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Navbar from '../navbar/Navbar';

const Routes = () => {
  return (
   <Router>
     <Navbar />
     <Switch> {/* le switch test toutes les routes */}
       <Route path="/" exact component={Home} />
       <Route path="/profil" exact component={Profil} />
       <Redirect to="/" /> {/* on est redirigé sur l'accueil si aucune route ne fonctionne */}
     </Switch>
   </Router>
  );
};

export default Routes;