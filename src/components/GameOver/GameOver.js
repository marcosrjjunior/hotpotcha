import React, { Component } from "react";
import parrot from '../../images/parrot.gif';
import { LinkButton } from "../Utils/Buttons";
import './GameOver.css';

class GameOver extends Component {
    render() {
        return (
            <div className="GameOver">
                Game Over

                <img src={parrot} className="parrot" alt="Party Parrot" />

                <LinkButton to="/">Start Again</LinkButton>
            </div>
        )
    }
}

export default GameOver;
