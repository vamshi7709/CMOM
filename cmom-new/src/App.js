import React from 'react';
import store from './redux/store';
import './App.css';
import Header from './containers/Header';
import { Provider } from 'react-redux';
import CoinDetails from './containers/CoinDetails';
import CoinListing from './containers/CoinListing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App () {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={CoinListing} />
          <Route path="/coin/:coinId" component={CoinDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
