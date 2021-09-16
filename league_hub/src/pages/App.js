import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// .. means parent folder
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import './../App.css';
// . is used when in the same directory
import Home from './Home';
import Champions from './Champions';
import SummonerSearch from './SummonerSearch';




function App() {
  return (
     <div id='app'>
       

        <NavBar />
          <Switch>
          <Route path="/home">
              <Home />
            </Route>
            <Route path="/champions">
              <Champions />
            </Route>
            <Route path="/summonerSearch">
              <SummonerSearch />
            </Route>
          </Switch>
        <Footer />
    </div>
  );
}

export default App;
