import React, { Component } from "react";
<<<<<<< HEAD
import { withRouter } from "react-router-dom";
import { Button } from "../Utils/Buttons";
import { TextBox } from "../Utils/Inputs";
import "./AskRhyme.scss";

class AskRhyme extends Component {
    constructor(props) {
        super(props);
        this.state = { ryhme: null };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ ryhme: event.target.value });
    }

    selectRhyme() {
        this.props.updateState('ryhme', this.state.ryhme);
        this.props.history.push('game-start');
=======
import { Link } from "react-router-dom";
import "./AskRhyme.scss";

export default class AskRhyme extends Component {
    constructor() {
        super();
        this.state = { ryhme: "" };
    }

    updateRhyme(rhyme) {
        this.setState({ rhyme });
>>>>>>> origin/master
    }

    render() {
        return <div>
<<<<<<< HEAD
            <p>Choose a Word to Ryhme</p>

            <TextBox name="ryhme" onChange={this.handleChange} />

            <Button onClick={() => this.selectRhyme()}>Begin</Button>
=======
            <p id ="title=text">Choose a Word to Rhyme</p>
            <input name="ryhme" onChange={e => this.updateRhyme(e.target.value)} />
            <Link to="game-start" onClick={() => this.props.onRhymeSet(this.state.rhyme)}>Begin</Link>
>>>>>>> origin/master
        </div>
    }
}
