import React, { Component } from 'react';
import './SelectPlayers.scss';
import { Microphone } from "../Utils/Microphone";

class SelectPlayers extends Component {
    click(e) {
        e.preventDefault();
      }
	render() {        
        return (
            <div className="SelectPlayers">
                <p id="main-text">How Many Players?</p>
                <p id="PlayerNumber">0</p>
                <Microphone />
            </div>
        );
    }
}

export default SelectPlayers;
