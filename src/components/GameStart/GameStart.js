import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./GameStart.scss";
import Countdown from './../Utils/Countdown.js';
import Microphone from './../Utils/Microphone.js';
import Incorrect from './../Utils/Incorrect.js';

class GameStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            error: false,
        };
    }

    gameOver() {
        this.props.history.push('game-over');
    }

    async request(word) {
        if (word) {
            // TODO send this logic to a service
            let rhymingWords = await this.props.rhymingWords;
            if (!rhymingWords) return;
            let match = rhymingWords.find(w => w.word.toUpperCase() === word.toUpperCase());

            if (match) {
                this.setState({ error: false });
                this.props.onAnswer(match.word);
                this.props.onChangePlayer();
                setTimeout(() => this.props.history.push('throw-phone'), 1000);
            } else
                this.setState({ error: true });
     

            return;
        }

        this.setState({ error: true });
    }

    render() {
        return (
            <div className="GameStart">
                <Countdown time={15} end={() => this.gameOver()} />
                <p>{this.props.mostRecentAnswer}</p>
                {this.state.error &&
                    <Incorrect message="ohh noo, we don't have this word, keep trying" />}
                <Microphone request={word => this.request(word)} />
            </div>
        )
    }
}

export default withRouter(GameStart);
