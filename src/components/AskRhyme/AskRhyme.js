import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AskRhyme.scss";

export default class AskRhyme extends Component {
    constructor() {
        super();
        this.state = { ryhme: "" };
    }

    updateRhyme(rhyme) {
        this.setState({ rhyme });
    }

    render() {
        return <div>
            <p>Choose a Word to Ryhme</p>
            <input name="ryhme" onChange={e => this.updateRhyme(e.target.value)} />
            <Link to="game-start" onClick={() => this.props.onRhymeSet(this.state.rhyme)}>Begin</Link>
        </div>
    }
}
