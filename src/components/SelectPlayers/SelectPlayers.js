import React, { Component } from 'react';
import './SelectPlayers.scss';

import {
  Route,
  Link
} from 'react-router-dom';

class SelectPlayers extends Component {
    click(e) {
        e.preventDefault();
      }
	render() {
    console.log(this)
        
        return (
            <div className="SelectPlayers">
                <p id="main-text">How Many Players?</p>
                <p id="PlayerNumber">0</p>
                <img onContextMenu={e => e.preventDefault()} src={this.props.micIcon} className="microphone-logo" alt="microphone" />
            </div>
        );
    }
}

export default SelectPlayers;
