import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

// Provider needs to be in curly braces because not a default export
import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
        {/* Route-based code splitting*/}
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/lyrics/track/:id" component={Lyrics}/>
        </Switch>
        </div>
      </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
