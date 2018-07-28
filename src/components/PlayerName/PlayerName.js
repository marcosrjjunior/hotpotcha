import React, { Component } from "react";
import { Link } from "react-router-dom";
import SpeechRecognition from "react-speech-recognition";
import "./PlayerName.scss";

class PlayerName extends Component {
    render() {
        let { transcript, startListening, stopListening } = this.props;

        return <div>
            <p>Player name {transcript}</p>
            <div><button onMouseDown={() => startListening()} onMouseUp={() => stopListening()}>Listen</button></div>
            <Link to="/rules">Rules</Link>
        </div>;
    }
}

export default SpeechRecognition({ autoStart: false})(PlayerName);
