import React, { Component } from 'react';
import './SelectPlayers.scss';
import microphone from '../../images/microphone.svg';
import {
  Route,
  Link
} from 'react-router-dom';

class SelectPlayers extends Component {

	render() {
        return (
            <div className="SelectPlayers">
                <p id="main-text">How Many Players?</p>
                <p id="PlayerNumber">0</p>
                <img src={microphone} className="microphone-logo" alt="microphone" />
                
            </div>
        );
    }
}

export default SelectPlayers;
