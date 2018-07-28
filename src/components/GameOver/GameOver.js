import React, { Component } from "react";
import './GameOver.scss';
import parrot from '../../images/parrot.gif';
import { LinkButton } from "../Utils/Buttons"

class GameOver extends Component {
    render() {
        return (
            <div className="GameOver">
                Game Over

                <img src={parrot} className="parrot" />

                <LinkButton to="/">Start Again</LinkButton>
            </div>
        )
    }
}

export default GameOver;
