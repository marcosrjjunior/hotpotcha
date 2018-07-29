import React, { Component } from 'react';
import SpeechRecognition from "react-speech-recognition";
import microphone from '../../images/microphone.svg';
import './Microphone.scss';

class Microphone extends Component {
    start() {
        let { resetTranscript, startListening } = this.props;

        resetTranscript();
        startListening();
    }

    stop() {
        let { finalTranscript, interimTranscript } = this.props;

        this.props.stopListening();
        this.props.request(finalTranscript || interimTranscript);
    }

    render() {
        return (
            <img onContextMenu={e => e.preventDefault()}
                src={microphone}
                className="microphone-logo" alt="microphone"
                onMouseDown={() => this.start()}
                onTouchStart={() => this.start()}
                onMouseUp={() => this.stop()}
                onTouchEnd={() => this.stop()}
            />
        )
    }
}

export default SpeechRecognition({ autoStart: false })(Microphone);
