import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import logo from './logo.svg';
import Portfolio from './pages/Portfolio'
import Sidebar from './components/Sidebar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <Sidebar/>
        </div>
        <div className="col page">
          <Router>
            <Switch>
              <Route exact path='/' render={() => 
                <Portfolio>

                </Portfolio>
              }/>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
