import React, { Component } from 'react';
import './Start.scss';
import {
  Route,
  Link
} from 'react-router-dom';

class Start extends Component {
	render() {
        return (
            <div className="Start">
                <p className="Start-intro">
                    <Link to="/select-players">
                        Start
                    </Link>
                </p>
            </div>
        );
    }
}

export default Start;
