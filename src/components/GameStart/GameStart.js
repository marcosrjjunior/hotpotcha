import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./GameStart.scss";
import Countdown from './../Utils/Countdown.js';

class GameStart extends Component {
    gameOver() {
        this.props.history.push('game-over');
    }

    render() {
        return (
            <div>
                <Countdown end={() => this.gameOver()} />
            </div>
        )
    }
}

export default withRouter(GameStart);
