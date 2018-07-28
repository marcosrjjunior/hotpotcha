import React, { Component } from 'react';
import Start from './components/Start/Start.js';
import SelectPlayers from './components/SelectPlayers/SelectPlayers.js';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div className="App">
               <Router>
                    <div>
                        <Route exact path="/" component={Start}/>
                        <Route path="/select-players" component={SelectPlayers}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;