import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import AskRhyme from './components/AskRhyme/AskRhyme';
import GameOver from './components/GameOver/GameOver';
import GameStart from './components/GameStart/GameStart';
import { Rules } from './components/Rules/Rules';
import { SimplePlayerInput } from "./components/SimplePlayerInput/SimplePlayerInput";
import Start from './components/Start/Start.js';
import ThrowPhone from './components/ThrowPhone/ThrowPhone';
import { getRhyme } from "./services/datamuse";
import createBrowserHistory from 'history/createBrowserHistory';

class GameModel {
    players = [];
    currentPlayer;
    rhyme = null;
    rhymingWords; // Promise<string[]>
    mostRecentAnswer = "";
}

const history = createBrowserHistory();

class App extends Component {
    constructor() {
        super();
        this.state = new GameModel();
    }

    render() {
        return (
            <div className={`App whiteBackground`}>
                <Route exact path="/" component={Start} />
                <Route path="/input-players" component={() =>
                    <SimplePlayerInput onPlayersSet={players => this.setPlayers(players)} />} />
                <Route path="/rules" component={Rules} />
                <Route path="/ask-rhyme" component={() =>
                    <AskRhyme onRhymeSet={rhyme => this.setRhyme(rhyme)} />} />
                <Route path="/throw-phone" component={() =>
                    <ThrowPhone currentPlayer={this.state.currentPlayer} />} />
                <Route path="/game-start" component={() =>
                    <GameStart rhymingWords={this.state.rhymingWords}
                        mostRecentAnswer={this.state.mostRecentAnswer}
                        onAnswer={answer => this.setAnswer(answer)}
                        onChangePlayer={() => this.changePlayer()} />} />
                <Route path="/game-over" component={GameOver} word={this.state.rhyme} />
            </div>
        );
    }

    setPlayers(players) {
        this.setState({
            players,
            currentPlayer: this.getRandom(players)
        });
    }

    setRhyme(rhyme) {
        this.setState({
            rhyme,
            rhymingWords: getRhyme(rhyme)
        });
    }

    async setAnswer(mostRecentAnswer) {
        let previousRhymes = await this.state.rhymingWords;
        this.setState({
            mostRecentAnswer,
            rhymingWords: Promise.resolve(previousRhymes.filter(w => w.word.toUpperCase() !== mostRecentAnswer.toUpperCase()))
        });
    }

    changePlayer() {
        let playersNotPlaying = this.state.players.filter(p => p !== this.state.currentPlayer);

        this.setState({
            currentPlayer: this.getRandom(playersNotPlaying),
            mostRecentAnswer: ""
        });
    }

    getRandom(arr) {
        return arr[Math.floor(Math.random() * Math.floor(arr.length - 1))];
    }
}


class Root extends Component {
    render() {
        return <Router history={history}>
            <App /> 
        </Router>;
    }
}

export default Root;
