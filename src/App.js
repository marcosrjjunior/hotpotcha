import React, { Component } from 'react';
import Start from './components/Start/Start.js';
import SelectPlayers from './components/SelectPlayers/SelectPlayers.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {recordAudio, sleep} from './services/recordAudio.js'
import {uploadAudio} from './services/speechToText.js'
import Speech from './services/speechToText.js'

class App extends Component {

    recordAudio() {
        console.log('recordAudio');

        {/*(async () => {
            const recorder = await recordAudio();
            recorder.start();
            await sleep(1000); 
            const audio = await recorder.stop();
            audio.play();
            await uploadAudio()
        })(); */}
        console.log(this)
    }

    render() {
        return (
            <div className="App">
            <button onClick={this.recordAudio}>Record</button>
            <Speech />
               <Router>
                    <div>
                        <Route exact path="/" component={Start}/>
                        <Route path="/select-players" component={SelectPlayers}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;