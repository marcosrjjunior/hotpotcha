import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { LinkButton } from "../Utils/Buttons";
import './Start.scss';

class Start extends Component {
	render() {
        return (
            <div className="Start">
                <div id="logo">
                <img src={logo} className="App-logo" alt="logo" /> 
                </div>
                <LinkButton to="/input-players">New Game</LinkButton>
                <div id="whitespace">
                </div>
            </div>
        );
    }
}

export default Start;
