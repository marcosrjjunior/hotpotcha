import React, { Component } from 'react';
import './Microphone.scss';
import microphone from '../../images/microphone.svg';
import SpeechRecognition from "react-speech-recognition";

class Microphone extends Component {
    start() {
        let { resetTranscript, startListening } = this.props;

        resetTranscript();
        startListening();
    }

    render() {
        let { finalTranscript, interimTranscript, stopListening } = this.props;

        return (
            <img onContextMenu={e => e.preventDefault()} 
                src={microphone} 
                className="microphone-logo" alt="microphone"
                onMouseDown={() => this.start()} 
                onMouseUp={stopListening}
            />
        )
    }

    
}

export default SpeechRecognition({ autoStart: false })(Microphone);
