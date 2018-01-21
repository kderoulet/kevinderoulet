import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import logo from './logo.svg';
import Portfolio from './pages/Portfolio'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="row">
        <Sidebar/>
        <Router>
          <Switch>
            <Route exact path='/' render={() => 
              <Portfolio>
              </Portfolio>
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
