import React, { Component } from 'react';
import Start from './components/Start/Start.js';
import SelectPlayers from './components/SelectPlayers/SelectPlayers.js';
import './App.scss';
import { PlayerName } from './components/PlayerName/PlayerName';
import { Rules } from './components/Rules/Rules';
import { GameStart } from './components/GameStart/GameStart';
import ThrowPhone from './components/ThrowPhone/ThrowPhone';
import { AskRhyme } from './components/AskRhyme/AskRhyme';
import { CheckRhyme } from './components/CheckRhyme/CheckRhyme';
import microphone from './images/microphone.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Speech from './Speech';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Start}/>
                        <Route path="/select-players" component={() => <SelectPlayers micIcon={microphone} />}/>
                        <Route path="/player-name" component={() => <PlayerName micIcon={microphone}/>}/>
                        <Route path="/rules" component={Rules}/>
                        <Route path="/game-start" component={GameStart}/>
                        <Route path="/throw-phone" component={ThrowPhone}/>
                        <Route path="/ask-rhyme" component={AskRhyme}/>
                        <Route path="/check-rhyme" component={CheckRhyme}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;