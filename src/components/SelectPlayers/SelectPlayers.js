import React, { Component } from 'react';
import './SelectPlayers.scss';
import microphone from '../../images/microphone.svg';

class SelectPlayers extends Component {
    click(e) {
        e.preventDefault();
      }
	render() {        
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
