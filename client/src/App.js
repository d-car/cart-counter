import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/Nav';
// import NoMatch from './pages/NoMatch';
import SearchForm from './components/SearchForm/SearchForm';
import GameList from './components/GameList';
import Game from './components/Game';
import Login from './pages/login'




const App = () => (
  <Router>
    <div>
      <PrimarySearchAppBar />
        <Switch>
          {/* <PrimarySearchAppBar /> */}
          <Route exact path='/search' component={SearchForm} />
          <Route exact path='/' component={Game} />
          {/* <Route exact path='/callback' component={Profile} />
          <Route exact path='/home' component={Splash} />
          <Route exact path='/profile' component={Profile} /> */}
          {/* <Route exact path='/search' component={Search} /> */}
          {/* <Route component={NoMatch} /> */}
          <Route exact path='/login' component={Login} />
        </Switch>
    </div>
  </Router>
);

export default App;
