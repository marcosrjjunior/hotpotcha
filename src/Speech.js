import React, { PropTypes, Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Speech extends Component {
	render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

        return (
            <div className="Speech">
                <p className="Speech-intro"></p>
                adas
                <span>asdasd{transcript}</span>
            </div>
        );
    }
}

Speech.propTypes = propTypes

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(Speech);
