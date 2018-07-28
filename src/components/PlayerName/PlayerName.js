import React, { Component } from "react";
import { Link } from "react-router-dom";
import SpeechRecognition from "react-speech-recognition";
import "./PlayerName.scss";

class PlayerName extends Component {
    render() {
        let { transcript, startListening, stopListening } = this.props;

        return <div>
            <p>Player name {this.transcript}</p>
            <Link to="/rules">Rules</Link>
            <button onMouseDown={startListening} onMouseUp={stopListening}>Listen</button>
            <div>{transcript}</div>
        </div>;
    }
}

export default SpeechRecognition(PlayerName);
