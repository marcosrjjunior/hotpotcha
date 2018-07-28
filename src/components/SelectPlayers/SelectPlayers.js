import React, { Component } from 'react';
import './SelectPlayers.scss';
import { Link } from 'react-router-dom';

class SelectPlayers extends Component {

	render() {
        return (
            <div className="SelectPlayers">
                <p>SelectPlayers</p>
                <Link to="player-name">Player Name</Link>
            </div>
        );
    }
}

export default SelectPlayers;
