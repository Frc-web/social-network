import React from 'react';
// BrowserRouter est la bibliothèque de react-router-dom, qui permet de créer le router
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';

const Routes = () => {
  return (
   <Router>
     <Switch> {/* le switch test toutes les routes */}
       <Route path="/" exact component={Home} />
       <Route path="/profil" exact component={Profil} />
       <Route path="/trending" exact component={Trending} />
       <Redirect to="/" /> {/* on est redirigé sur l'accueil si aucune route ne fonctionne */}
     </Switch>
   </Router>
  );
};

export default Routes;