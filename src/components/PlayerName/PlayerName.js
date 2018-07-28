import React, { Component } from "react";
import { Link } from "react-router-dom";
import SpeechRecognition from "react-speech-recognition";
import "./PlayerName.scss";

class PlayerName extends Component {
    render() {
        let { finalTranscript, interimTranscript, stopListening } = this.props;

        return <div>
            <p>Player name: {finalTranscript || interimTranscript}</p>
            <div>
                <button onMouseDown={() => this.start()} onMouseUp={stopListening}>Listen</button>
            </div>
            <Link to="/rules">Rules</Link>
        </div>;
    }

    start() {
        let { resetTranscript, startListening } = this.props;
        resetTranscript();
        startListening();
    }
}

export default SpeechRecognition({ autoStart: false })(PlayerName);
