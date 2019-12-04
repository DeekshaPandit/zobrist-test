import React from 'react';
import logo from './logo.svg';
import './App.sass';

import browserHistory  from "./browserHistory";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom"; 
import Products from './components/Products';

function App() {
  return (
    <React.Fragment>
      <Router history={browserHistory}> 
        <main id="main">
          <Switch>
            <Route path="/products" exact component={Products} /> 
          </Switch>
        </main>
      </Router>
   </React.Fragment>
  );
}

export default App;
