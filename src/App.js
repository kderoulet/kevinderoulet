import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Portfolio from './pages/Portfolio'
import Sidebar from './components/Sidebar'
import Chess from './pages/Chess'
import WTPA from './pages/WTPA'
import Ryde from './pages/Ryde'
import Solitaire from './pages/Solitaire'
import Dragonfighter from './pages/Dragonfighter'
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
                <Portfolio/>
              }/>
              <Route exact path='/chess' render={() => 
                <Chess/>
              }/>
              <Route exact path='/wtpa' render={() => 
                <WTPA/>
              }/>
              <Route exact path='/ryde' render={() => 
                <Ryde/>
              }/>
              <Route exact path='/solitaire' render={() => 
                <Solitaire/>
              }/>
              <Route exact path='/dragonfighter' render={() => 
                <Dragonfighter/>
              }/>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
