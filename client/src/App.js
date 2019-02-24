import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import GameList from './components/GameList';
import Details from './components/Details';
import Collection from './components/Collection';
import NoMatch from './components/NoMatch';
import Modal from './components/Modal';
import SearchForm from './components/SearchForm/SearchForm';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={GameList} />
          <Route exact path='/search' component={SearchForm} />
          <Route path='/details' component={Details} />
          <Route path='/collection' component={Collection} />
          <Route component={NoMatch} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
