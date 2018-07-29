import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./GameStart.scss";
import Countdown from './../Utils/Countdown.js';
import Microphone from './../Utils/Microphone.js';
import Incorrect from './../Utils/Incorrect.js';
import { getRhyme } from './../../services/datamuse.js';

class GameStart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: '',
            error: '',
            answer: '',
        };
    }

    gameOver() {
        this.props.history.push('game-over');
    }

    request(word) {
        console.log('request function word: ', word)
        if (word) {
            // send this logic to a service?
            let { words } = this.props;
            if (!words) return;
            let position = words.map(function(o) { return o.word; }).indexOf(word);
            if (position !== -1) {
                this.setState({ answer: words[position].word });

                // Throw to next person;
                // Check players array
            } else {
                // Wrong answer
                this.setState({ error: "ohh noo, we don't have this word, keep trying" });
            }

            return;
        }

        this.setState({ error: "ohh noo, we don't have this word, keep trying" });
    }

    render() {
        return (
            <div className="GameStart">
                <Countdown time={15} end={() => this.gameOver()} />
                <p>{this.answer}</p>
                <Incorrect message={this.error} />
                <Microphone request={(word) => this.request(word)}/>
            </div>
        )
    }
}

export default withRouter(GameStart);
