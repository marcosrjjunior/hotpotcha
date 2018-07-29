import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import AskRhyme from './components/AskRhyme/AskRhyme';
import GameOver from './components/GameOver/GameOver';
import GameStart from './components/GameStart/GameStart';
import { Rules } from './components/Rules/Rules';
import { SimplePlayerInput } from "./components/SimplePlayerInput/SimplePlayerInput";
import Start from './components/Start/Start.js';
import ThrowPhone from './components/ThrowPhone/ThrowPhone';
import { getRhyme } from "./services/datamuse";

class GameModel {
    players = [];
    currentPlayer;
    rhyme = null;
    rhymingWords; // Promise<string[]>
    mostRecentAnswer = "";
}

class App extends Component {
    constructor() {
        super();
        this.state = new GameModel();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Start} />
                        <Route path="/input-players" component={() =>
                            <SimplePlayerInput onPlayersSet={players => this.setPlayers(players)} />} />
                        <Route path="/rules" component={Rules} />
                        <Route path="/ask-rhyme" component={() =>
                            <AskRhyme onRhymeSet={rhyme => this.setRhyme(rhyme)} />} />
                        <Route path="/throw-phone" component={ThrowPhone} />
                        <Route path="/game-start" component={() =>
                            <GameStart rhymingWords={this.state.rhymingWords}
                                mostRecentAnswer={this.state.mostRecentAnswer}
                                onAnswer={answer => this.setAnswer(answer)}
                                onChangePlayer={() => this.onChangePlayer()} />} />
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
        this.setState({
            rhyme,
            rhymingWords: getRhyme(rhyme),
            mostRecentAnswer: ""
        });
    }

    setAnswer(mostRecentAnswer) {
        this.setState({
            mostRecentAnswer,
            rhymingWords: Promise.resolve(async resolve =>
                resolve((await this.state.rhymingWords).filter(w => w.toUpperCase() !== mostRecentAnswer.toUpperCase()))
            )
        });
    }

    onChangePlayer() {
        let possiblePlayers = this.state.players.filter(p => p !== this.state.currentPlayer);
        let currentPlayer = possiblePlayers[this.getRandomInt(possiblePlayers.length - 1)];
        this.setState({ currentPlayer });
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export default App;
