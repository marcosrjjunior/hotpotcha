import React, { Component } from 'react';
import './Start.scss';
import logo from '../../images/logo.png';
import {
  Route,
  Link
} from 'react-router-dom';
import { Link } from 'react-router-dom';

class Start extends Component {
	render() {
        return (
            <div className="Start">
                <div id="logo">
                <img src={logo} className="App-logo" alt="logo" /> 
                </div>
                <button type="button" Class="button">
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
