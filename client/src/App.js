import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import GameList from './components/GameList';
import Details from './components/Details';
import Collection from './components/Collection';
import NoMatch from './components/NoMatch';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={ GameList } />
          <Route path='/details' component={ Details } />
          <Route path='/Collection' component={ Collection } />
          <Route component={ NoMatch } />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
