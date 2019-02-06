import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Nav from './components/Nav';
// import NoMatch from './pages/NoMatch';
// import Search from './pages/Search/Search';
import SearchForm from './components/SearchForm/SearchForm';



const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path='/' component={SearchForm} />
        {/* <Route exact path='/' component={Search} /> */}
        {/* <Route exact path='/callback' component={Profile} />
        <Route exact path='/home' component={Splash} />
        <Route exact path='/profile' component={Profile} /> */}
        {/* <Route exact path='/search' component={Search} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
