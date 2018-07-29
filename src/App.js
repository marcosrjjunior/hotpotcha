import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import AskRhyme from './components/AskRhyme/AskRhyme';
import { CheckRhyme } from './components/CheckRhyme/CheckRhyme';
import GameOver from './components/GameOver/GameOver';
import GameStart from './components/GameStart/GameStart';
import { Rules } from './components/Rules/Rules';
import { SimplePlayerInput } from "./components/SimplePlayerInput/SimplePlayerInput";
import Start from './components/Start/Start.js';
import ThrowPhone from './components/ThrowPhone/ThrowPhone';

class GameModel {
    players = [];
    rhyme = null;
}

class App extends Component {
    constructor() {
        super();
        this.state = new GameModel();
    }

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Start} />
                        <Route path="/input-players" component={() =>
                            <SimplePlayerInput onPlayersSet={players => this.setPlayers(players)} />} />
                        <Route path="/rules" component={Rules} />
                        <Route path="/game-start" component={GameStart} />
                        <Route path="/throw-phone" component={ThrowPhone} />
                        <Route path="/ask-rhyme" component={() =>
                            <AskRhyme onRhymeSet={rhyme => this.setRhyme(rhyme)} />} />
                        <Route path="/check-rhyme" component={CheckRhyme} />
                        <Route path="/game-over" component={GameOver} word={this.state.rhyme} />
                    </div>
                </Router>
            </div>
        );
    }

    setPlayers(players) {
        this.setState({ players });
    }

    setRhyme(rhyme) {
        this.setState({ rhyme });
    }
}

export default App;
