import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Start.scss';

class Start extends Component {
    render() {
        return (
            <div className="Start">
                <div id="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <button type="button" className="button">
                    <Link to="/select-players">
                        New Game
                    </Link>
                </button>
                <div id="whitespace">
                </div>
            </div>
        );
    }
}

export default Start;
