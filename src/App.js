import React, { Component } from 'react';
import Start from './components/Start/Start.js';
import SelectPlayers from './components/SelectPlayers/SelectPlayers.js';
import './App.scss';
import { PlayerName } from './components/PlayerName/PlayerName';
import { Rules } from './components/Rules/Rules';
import ThrowPhone from './components/ThrowPhone/ThrowPhone';
import GameStart from './components/GameStart/GameStart';
import AskRhyme from './components/AskRhyme/AskRhyme';
import { CheckRhyme } from './components/CheckRhyme/CheckRhyme';
import { SimplePlayerInput } from "./components/SimplePlayerInput/SimplePlayerInput";
import GameOver from './components/GameOver/GameOver';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Speech from './Speech';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {rhyme: null};
    }

    updateState(data, value) {
        console.log('updateState');

        this.setState({
            ...this.state,
            rhyme: value
        });
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Start}/>
                        <Route path="/input-players" component={SimplePlayerInput} />
                        <Route path="/rules" component={Rules}/>
                        <Route path="/game-start" component={GameStart}/>
                        <Route path="/throw-phone" component={ThrowPhone}/>
                        <Route path="/ask-rhyme" component={() => <AskRhyme updateState={() => this.updateState()} />} />
                        <Route path="/check-rhyme" component={CheckRhyme}/>
                        <Route path="/game-over" component={GameOver} word={this.state.rhyme} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;