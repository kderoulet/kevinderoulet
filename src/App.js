import React, { Component } from 'react'
import { Route } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup"
import AnimatedSwitch from "./utils/AnimatedSwitch"

import Welcome from './pages/Welcome'
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
      <div className="row wrapper">
        <div className="col small-width">
          <Sidebar/>
        </div>
        <div className="col page large-width">
          <Route
            render={({ location }) => (
            <TransitionGroup component="main">
              <AnimatedSwitch
                  key={location.key}
                  location={location}
              >
                <Route exact path='/' component={Welcome} />              
                <Route exact path='/portfolio' component={Portfolio}/>
                <Route exact path='/chess' component={Chess}/>
                <Route exact path='/wtpa' component={WTPA}/>
                <Route exact path='/ryde' component={Ryde}/>
                <Route exact path='/solitaire' component={Solitaire}/>
                <Route exact path='/dragonfighter' component={Dragonfighter}/>
              </AnimatedSwitch>
            </TransitionGroup>
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
