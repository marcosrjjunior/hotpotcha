import React, { Component } from "react";
import './GameOver.scss';
import parrot from '../../images/parrot.gif';
import {
  Link,
  withRouter
} from 'react-router-dom';

class GameOver extends Component {
    render() {
        return (
            <div className="GameOver">
                Game Over
                
                <img src={parrot} className="parrot" />

                <button type="button" Class="button">
                    <Link to="/">
                        Start Again
                    </Link>
                </button>
            </div>
        )
    }
}

export default withRouter(GameOver);
