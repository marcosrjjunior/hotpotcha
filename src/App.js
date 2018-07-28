import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { AskRhyme } from './components/AskRhyme/AskRhyme';
import { CheckRhyme } from './components/CheckRhyme/CheckRhyme';
import GameOver from './components/GameOver/GameOver';
import GameStart from './components/GameStart/GameStart';
import { Rules } from './components/Rules/Rules';
import { SimplePlayerInput } from "./components/SimplePlayerInput/SimplePlayerInput";
import Start from './components/Start/Start.js';
import ThrowPhone from './components/ThrowPhone/ThrowPhone';

class AppModel {
    players = [];
}

class App extends Component {
    constructor() {
        super();
        this.state = new AppModel();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Start}/> 
                        <Route path="/input-players" component={() => 
                            <SimplePlayerInput onPlayersAdded={players => this.addPlayer(players)} /> }/>
                        <Route path="/rules" component={Rules}/>
                        <Route path="/game-start" component={GameStart}/>
                        <Route path="/throw-phone" component={ThrowPhone}/>
                        <Route path="/ask-rhyme" component={AskRhyme}/>
                        <Route path="/check-rhyme" component={CheckRhyme}/>
                        <Route path="/game-over" component={GameOver}/>
                    </div>
                </Router>
            </div>
        );
    }

    addPlayer(players) {
        this.setState({ players })
    }
}

export default App;
