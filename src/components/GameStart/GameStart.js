import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./GameStart.scss";
import Countdown from './../Utils/Countdown.js';
import Microphone from './../Utils/Microphone.js';

class GameStart extends Component {
    gameOver() {
        {/* this.props.history.push('game-over'); */}
    }

    render() {
        return (
            <div>
                <Countdown time={15} end={() => this.gameOver()} />

                <Microphone />
            </div>
        )
    }
}

export default withRouter(GameStart);
